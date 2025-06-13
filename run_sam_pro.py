#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SAM PRO Desktop Launcher
مشغل تطبيق SAM PRO لسطح المكتب

تطوير: MOHANNAD AHMAD
هاتف: +963-998-171-954
"""

import os
import sys
import webbrowser
import threading
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler
import socket

def find_free_port():
    """البحث عن منفذ متاح"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        s.listen(1)
        port = s.getsockname()[1]
    return port

def start_server(port):
    """بدء خادم HTTP المحلي"""
    try:
        # تغيير المجلد إلى مجلد التطبيق
        if getattr(sys, 'frozen', False):
            # إذا كان التطبيق مجمد (exe)
            app_dir = sys._MEIPASS
        else:
            # إذا كان يعمل من Python
            app_dir = os.path.dirname(os.path.abspath(__file__))
        
        os.chdir(app_dir)
        
        class CustomHandler(SimpleHTTPRequestHandler):
            def log_message(self, format, *args):
                pass  # تعطيل رسائل السجل
                
            def end_headers(self):
                self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                self.send_header('Pragma', 'no-cache')
                self.send_header('Expires', '0')
                super().end_headers()
        
        server = HTTPServer(('localhost', port), CustomHandler)
        print(f"🌐 الخادم يعمل على: http://localhost:{port}")
        server.serve_forever()
        
    except Exception as e:
        print(f"❌ خطأ في بدء الخادم: {e}")
        input("اضغط Enter للخروج...")

def open_browser(port):
    """فتح المتصفح"""
    url = f"http://localhost:{port}/index.html"
    print(f"🚀 فتح التطبيق في المتصفح: {url}")
    time.sleep(2)  # انتظار بدء الخادم
    webbrowser.open(url)

def main():
    """الدالة الرئيسية"""
    print("=" * 50)
    print("🎉 مرحباً بك في SAM PRO")
    print("نظام محاسبة شامل - إصدار سطح المكتب")
    print("تطوير: MOHANNAD AHMAD")
    print("هاتف: +963-998-171-954")
    print("=" * 50)
    print()
    
    try:
        # البحث عن منفذ متاح
        port = find_free_port()
        print(f"📡 تم العثور على منفذ متاح: {port}")
        
        # بدء الخادم في خيط منفصل
        server_thread = threading.Thread(target=start_server, args=(port,), daemon=True)
        server_thread.start()
        
        # فتح المتصفح
        browser_thread = threading.Thread(target=open_browser, args=(port,), daemon=True)
        browser_thread.start()
        
        print("✅ تم بدء التطبيق بنجاح!")
        print("🌐 يمكنك الوصول للتطبيق من المتصفح")
        print("❌ لإغلاق التطبيق، اضغط Ctrl+C أو أغلق هذه النافذة")
        print()
        
        # انتظار إلى الأبد
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n👋 تم إغلاق التطبيق. شكراً لاستخدام SAM PRO!")
            
    except Exception as e:
        print(f"❌ خطأ في تشغيل التطبيق: {e}")
        input("اضغط Enter للخروج...")

if __name__ == "__main__":
    main()
