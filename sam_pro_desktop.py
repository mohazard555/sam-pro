#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SAM PRO Desktop Application
نظام محاسبة شامل - إصدار سطح المكتب

تطوير: MOHANNAD AHMAD
هاتف: +963-998-171-954
"""

import sys
import os
import webbrowser
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler
import tkinter as tk
from tkinter import messagebox, filedialog, ttk
import json
import subprocess
import socket
from urllib.parse import urlparse
import tempfile
import shutil

class SAMProDesktop:
    def __init__(self):
        self.root = tk.Tk()
        self.server = None
        self.server_thread = None
        self.port = self.find_free_port()
        self.setup_window()
        self.setup_menu()
        self.start_server()
        
    def find_free_port(self):
        """البحث عن منفذ متاح"""
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind(('', 0))
            s.listen(1)
            port = s.getsockname()[1]
        return port
    
    def setup_window(self):
        """إعداد النافذة الرئيسية"""
        self.root.title("SAM PRO - نظام محاسبة شامل")
        self.root.geometry("1200x800")
        self.root.minsize(1000, 600)
        
        # محاولة تعيين أيقونة
        try:
            if os.path.exists("assets/icon.ico"):
                self.root.iconbitmap("assets/icon.ico")
        except:
            pass
            
        # إعداد الإطار الرئيسي
        main_frame = tk.Frame(self.root, bg='#f0f0f0')
        main_frame.pack(fill=tk.BOTH, expand=True, padx=10, pady=10)
        
        # شريط الحالة
        self.status_frame = tk.Frame(main_frame, bg='#e0e0e0', height=30)
        self.status_frame.pack(fill=tk.X, side=tk.BOTTOM)
        
        self.status_label = tk.Label(
            self.status_frame, 
            text="جاري تحميل SAM PRO...", 
            bg='#e0e0e0',
            font=('Arial', 10)
        )
        self.status_label.pack(side=tk.LEFT, padx=10, pady=5)
        
        # منطقة المحتوى
        self.content_frame = tk.Frame(main_frame, bg='white', relief=tk.SUNKEN, bd=2)
        self.content_frame.pack(fill=tk.BOTH, expand=True, pady=(0, 10))
        
        # رسالة الترحيب
        welcome_label = tk.Label(
            self.content_frame,
            text="🎉 مرحباً بك في SAM PRO\nنظام محاسبة شامل",
            font=('Arial', 16, 'bold'),
            bg='white',
            fg='#333'
        )
        welcome_label.pack(expand=True)
        
        # أزرار التحكم
        buttons_frame = tk.Frame(self.content_frame, bg='white')
        buttons_frame.pack(pady=20)
        
        tk.Button(
            buttons_frame,
            text="🚀 فتح التطبيق",
            command=self.open_browser,
            font=('Arial', 12, 'bold'),
            bg='#007bff',
            fg='white',
            padx=20,
            pady=10
        ).pack(side=tk.LEFT, padx=10)
        
        tk.Button(
            buttons_frame,
            text="📁 فتح ملف",
            command=self.open_file,
            font=('Arial', 12),
            bg='#28a745',
            fg='white',
            padx=20,
            pady=10
        ).pack(side=tk.LEFT, padx=10)
        
        tk.Button(
            buttons_frame,
            text="💾 حفظ باسم",
            command=self.save_file,
            font=('Arial', 12),
            bg='#ffc107',
            fg='black',
            padx=20,
            pady=10
        ).pack(side=tk.LEFT, padx=10)
        
    def setup_menu(self):
        """إعداد شريط القوائم"""
        menubar = tk.Menu(self.root)
        self.root.config(menu=menubar)
        
        # قائمة ملف
        file_menu = tk.Menu(menubar, tearoff=0)
        menubar.add_cascade(label="ملف", menu=file_menu)
        file_menu.add_command(label="جديد", command=self.new_file, accelerator="Ctrl+N")
        file_menu.add_command(label="فتح", command=self.open_file, accelerator="Ctrl+O")
        file_menu.add_command(label="حفظ", command=self.save_file, accelerator="Ctrl+S")
        file_menu.add_separator()
        file_menu.add_command(label="خروج", command=self.quit_app, accelerator="Ctrl+Q")
        
        # قائمة عرض
        view_menu = tk.Menu(menubar, tearoff=0)
        menubar.add_cascade(label="عرض", menu=view_menu)
        view_menu.add_command(label="فتح في المتصفح", command=self.open_browser)
        view_menu.add_command(label="إعادة تحميل", command=self.reload_server)
        
        # قائمة مساعدة
        help_menu = tk.Menu(menubar, tearoff=0)
        menubar.add_cascade(label="مساعدة", menu=help_menu)
        help_menu.add_command(label="حول البرنامج", command=self.show_about)
        help_menu.add_command(label="الدعم الفني", command=self.show_support)
        
        # ربط اختصارات لوحة المفاتيح
        self.root.bind('<Control-n>', lambda e: self.new_file())
        self.root.bind('<Control-o>', lambda e: self.open_file())
        self.root.bind('<Control-s>', lambda e: self.save_file())
        self.root.bind('<Control-q>', lambda e: self.quit_app())
        
    def start_server(self):
        """بدء خادم HTTP المحلي"""
        try:
            os.chdir(os.path.dirname(os.path.abspath(__file__)))
            
            class CustomHandler(SimpleHTTPRequestHandler):
                def log_message(self, format, *args):
                    pass  # تعطيل رسائل السجل
                    
                def end_headers(self):
                    self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                    self.send_header('Pragma', 'no-cache')
                    self.send_header('Expires', '0')
                    super().end_headers()
            
            self.server = HTTPServer(('localhost', self.port), CustomHandler)
            self.server_thread = threading.Thread(target=self.server.serve_forever, daemon=True)
            self.server_thread.start()
            
            self.status_label.config(text=f"الخادم يعمل على المنفذ {self.port}")
            
            # فتح المتصفح تلقائياً بعد ثانيتين
            self.root.after(2000, self.open_browser)
            
        except Exception as e:
            messagebox.showerror("خطأ", f"فشل في بدء الخادم: {str(e)}")
    
    def open_browser(self):
        """فتح التطبيق في المتصفح"""
        url = f"http://localhost:{self.port}/index.html"
        webbrowser.open(url)
        self.status_label.config(text="تم فتح التطبيق في المتصفح")
    
    def reload_server(self):
        """إعادة تحميل الخادم"""
        if self.server:
            self.server.shutdown()
        time.sleep(1)
        self.start_server()
        self.status_label.config(text="تم إعادة تحميل الخادم")
    
    def new_file(self):
        """إنشاء ملف جديد"""
        result = messagebox.askyesno("ملف جديد", "هل تريد إنشاء ملف جديد؟\nسيتم فقدان البيانات غير المحفوظة.")
        if result:
            # إعادة تحميل الصفحة لمسح البيانات
            self.open_browser()
            self.status_label.config(text="تم إنشاء ملف جديد")
    
    def open_file(self):
        """فتح ملف"""
        file_path = filedialog.askopenfilename(
            title="فتح ملف SAM PRO",
            filetypes=[
                ("ملفات JSON", "*.json"),
                ("جميع الملفات", "*.*")
            ]
        )
        if file_path:
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = f.read()
                # يمكن إضافة منطق لتحميل البيانات في التطبيق
                self.status_label.config(text=f"تم فتح الملف: {os.path.basename(file_path)}")
                messagebox.showinfo("نجح", f"تم فتح الملف بنجاح:\n{os.path.basename(file_path)}")
            except Exception as e:
                messagebox.showerror("خطأ", f"فشل في فتح الملف:\n{str(e)}")
    
    def save_file(self):
        """حفظ ملف"""
        file_path = filedialog.asksaveasfilename(
            title="حفظ ملف SAM PRO",
            defaultextension=".json",
            filetypes=[
                ("ملفات JSON", "*.json"),
                ("جميع الملفات", "*.*")
            ]
        )
        if file_path:
            try:
                # بيانات تجريبية للحفظ
                sample_data = {
                    "app": "SAM PRO",
                    "version": "1.0.0",
                    "saved_at": time.strftime("%Y-%m-%d %H:%M:%S"),
                    "data": "يمكن إضافة بيانات التطبيق هنا"
                }
                with open(file_path, 'w', encoding='utf-8') as f:
                    json.dump(sample_data, f, ensure_ascii=False, indent=2)
                self.status_label.config(text=f"تم حفظ الملف: {os.path.basename(file_path)}")
                messagebox.showinfo("نجح", f"تم حفظ الملف بنجاح:\n{os.path.basename(file_path)}")
            except Exception as e:
                messagebox.showerror("خطأ", f"فشل في حفظ الملف:\n{str(e)}")
    
    def show_about(self):
        """عرض معلومات البرنامج"""
        about_text = """
SAM PRO - نظام محاسبة شامل
الإصدار: 1.0.0

نظام محاسبة متكامل يتضمن:
• إدارة العملاء والموردين
• فواتير المبيعات والمشتريات  
• إدارة المخزون والمستودعات
• سندات القبض والدفع
• التقارير المالية الشاملة
• النسخ الاحتياطي والاستعادة

تطوير: MOHANNAD AHMAD
هاتف: +963-998-171-954
البريد الإلكتروني: mohannad@sampro.com

© 2025 جميع الحقوق محفوظة
        """
        messagebox.showinfo("حول SAM PRO", about_text)
    
    def show_support(self):
        """عرض معلومات الدعم الفني"""
        support_text = """
الدعم الفني - SAM PRO

للحصول على المساعدة:

📞 الهاتف: +963-998-171-954
📧 البريد الإلكتروني: mohannad@sampro.com
🌐 الموقع: https://sampro.com

ساعات العمل:
السبت - الخميس: 9:00 ص - 6:00 م
الجمعة: مغلق

نحن هنا لمساعدتك!
        """
        messagebox.showinfo("الدعم الفني", support_text)
    
    def quit_app(self):
        """إغلاق التطبيق"""
        result = messagebox.askyesno("إغلاق البرنامج", "هل تريد إغلاق SAM PRO؟")
        if result:
            if self.server:
                self.server.shutdown()
            self.root.quit()
    
    def run(self):
        """تشغيل التطبيق"""
        try:
            self.root.protocol("WM_DELETE_WINDOW", self.quit_app)
            self.root.mainloop()
        except KeyboardInterrupt:
            self.quit_app()

def main():
    """الدالة الرئيسية"""
    try:
        app = SAMProDesktop()
        app.run()
    except Exception as e:
        print(f"خطأ في تشغيل التطبيق: {e}")
        input("اضغط Enter للخروج...")

if __name__ == "__main__":
    main()
