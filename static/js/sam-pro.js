/**
 * برنامج المحاسب الذكي - SAM PRO
 * تطوير: MOHANNAD AHMAD
 * الملف الرئيسي للتطبيق
 */

// بيانات التطبيق (محاكاة قاعدة البيانات)
let appData = {
    customers: [
        {
            id: 1,
            name: 'أحمد محمد',
            phone: '0123456789',
            email: 'ahmed@example.com',
            address: 'دمشق - المزة',
            taxNumber: '12345',
            creditLimit: 100000,
            currentBalance: 15000,
            createdAt: '2025-01-01'
        },
        {
            id: 2,
            name: 'فاطمة علي',
            phone: '0987654321',
            email: 'fatima@example.com',
            address: 'حلب - الصالحين',
            taxNumber: '67890',
            creditLimit: 50000,
            currentBalance: -5000,
            createdAt: '2025-01-02'
        }
    ],
    suppliers: [
        {
            id: 1,
            name: 'شركة الأمل للتجارة',
            phone: '0111222333',
            email: 'amal@company.com',
            address: 'دمشق - التجارة',
            taxNumber: '11111',
            currentBalance: 25000,
            createdAt: '2025-01-01'
        }
    ],
    products: [
        {
            id: 1,
            code: 'P001',
            name: 'لابتوب ديل',
            description: 'لابتوب ديل انسبايرون 15',
            unit: 'قطعة',
            costPrice: 800000,
            sellingPrice: 1000000,
            quantity: 10,
            minQuantity: 5,
            warehouseId: 1,
            category: 'إلكترونيات'
        },
        {
            id: 2,
            code: 'P002',
            name: 'ماوس لاسلكي',
            description: 'ماوس لاسلكي لوجيتك',
            unit: 'قطعة',
            costPrice: 15000,
            sellingPrice: 20000,
            quantity: 3,
            minQuantity: 10,
            warehouseId: 1,
            category: 'إكسسوارات'
        }
    ],
    warehouses: [
        {
            id: 1,
            name: 'المخزن الرئيسي',
            location: 'دمشق - المنطقة الصناعية',
            manager: 'محمد أحمد',
            phone: '0123456789'
        }
    ],
    invoices: [
        {
            id: 1,
            invoiceNumber: 'SALE-2025-0001',
            invoiceType: 'sale',
            invoiceDate: '2025-01-15',
            customerId: 1,
            subtotal: 1000000,
            discountRate: 5,
            discountAmount: 50000,
            taxRate: 10,
            taxAmount: 95000,
            totalAmount: 1045000,
            paidAmount: 500000,
            remainingAmount: 545000,
            status: 'confirmed',
            notes: 'فاتورة مبيعات تجريبية',
            items: [
                {
                    productId: 1,
                    quantity: 1,
                    unitPrice: 1000000,
                    totalAmount: 1000000
                }
            ],
            createdAt: '2025-01-15T10:30:00.000Z'
        },
        {
            id: 2,
            invoiceNumber: 'SALE-2025-0002',
            invoiceType: 'sale',
            invoiceDate: '2025-01-16',
            customerId: 2,
            subtotal: 125000,
            discountRate: 0,
            discountAmount: 0,
            taxRate: 10,
            taxAmount: 12500,
            totalAmount: 137500,
            paidAmount: 137500,
            remainingAmount: 0,
            status: 'confirmed',
            notes: 'فاتورة مبيعات مدفوعة بالكامل',
            items: [
                {
                    productId: 3,
                    quantity: 1,
                    unitPrice: 50000,
                    totalAmount: 50000
                },
                {
                    productId: 4,
                    quantity: 3,
                    unitPrice: 25000,
                    totalAmount: 75000
                }
            ],
            createdAt: '2025-01-16T14:20:00.000Z'
        },
        {
            id: 3,
            invoiceNumber: 'PUR-2025-0001',
            invoiceType: 'purchase',
            invoiceDate: '2025-01-14',
            supplierId: 1,
            subtotal: 8100000,
            discountRate: 2,
            discountAmount: 162000,
            taxRate: 10,
            taxAmount: 793800,
            totalAmount: 8731800,
            paidAmount: 5000000,
            remainingAmount: 3731800,
            status: 'confirmed',
            notes: 'فاتورة مشتريات من المورد الرئيسي',
            items: [
                {
                    productId: 1,
                    quantity: 10,
                    unitPrice: 750000,
                    totalAmount: 7500000
                },
                {
                    productId: 2,
                    quantity: 50,
                    unitPrice: 12000,
                    totalAmount: 600000
                }
            ],
            createdAt: '2025-01-14T09:15:00.000Z'
        }
    ],
    payments: [
        {
            id: 1,
            paymentNumber: 'REC-2025-001',
            paymentType: 'receipt',
            paymentDate: '2025-01-15',
            customerId: 1,
            amount: 500000,
            paymentMethod: 'cash',
            referenceNumber: '',
            bankName: '',
            notes: 'دفعة على حساب الفاتورة',
            status: 'confirmed',
            createdAt: '2025-01-15'
        },
        {
            id: 2,
            paymentNumber: 'PAY-2025-001',
            paymentType: 'payment',
            paymentDate: '2025-01-14',
            supplierId: 1,
            amount: 200000,
            paymentMethod: 'bank',
            referenceNumber: 'TRF123456',
            bankName: 'البنك التجاري السوري',
            notes: 'دفعة للمورد',
            status: 'confirmed',
            createdAt: '2025-01-14'
        }
    ],
    journalEntries: [
        {
            id: 1,
            entryDate: '2025-01-15',
            entryType: 'invoice',
            description: 'فاتورة مبيعات رقم INV-2025-001',
            debitAccount: 'العملاء',
            creditAccount: 'المبيعات',
            debitAmount: 1045000,
            creditAmount: 1045000,
            referenceType: 'invoice',
            referenceId: 1,
            createdAt: '2025-01-15'
        },
        {
            id: 2,
            entryDate: '2025-01-15',
            entryType: 'payment',
            description: 'سند قبض رقم REC-2025-001',
            debitAccount: 'الصندوق',
            creditAccount: 'العملاء',
            debitAmount: 500000,
            creditAmount: 500000,
            referenceType: 'payment',
            referenceId: 1,
            createdAt: '2025-01-15'
        }
    ],
    settings: {
        companyName: 'شركة SAM PRO',
        companyAddress: 'دمشق - سوريا',
        companyPhone: '+963-998-171-954',
        companyEmail: 'info@sampro.sy',
        taxNumber: '123456789',
        currency: 'SYP',
        currencySymbol: 'ل.س',
        taxRate: 10,
        password: '123',
        autoBackup: 'disabled',
        logoUrl: '',
        nextInvoiceNumber: {
            sale: 2,
            purchase: 1
        },
        nextPaymentNumber: {
            receipt: 2,
            payment: 2
        },
        developer: {
            name: 'MOHANNAD AHMAD',
            phone: '+963-998-171-954',
            email: 'mohannad.ahmad@example.com'
        }
    }
};

// حفظ البيانات في localStorage
function saveData() {
    localStorage.setItem('samProData', JSON.stringify(appData));
}

// تحميل البيانات من localStorage
function loadData() {
    console.log('📂 تحميل البيانات من التخزين المحلي...');

    const savedData = localStorage.getItem('samProData');
    if (savedData) {
        try {
            appData = JSON.parse(savedData);
            console.log('✅ تم تحميل البيانات بنجاح');

            // التحقق من وجود الهياكل الأساسية
            if (!appData.settings) appData.settings = {};
            if (!appData.customers) appData.customers = [];
            if (!appData.suppliers) appData.suppliers = [];
            if (!appData.products) appData.products = [];
            if (!appData.warehouses) appData.warehouses = [];
            if (!appData.invoices) appData.invoices = [];
            if (!appData.payments) appData.payments = [];
            if (!appData.journalEntries) appData.journalEntries = [];
            if (!appData.inventoryMovements) appData.inventoryMovements = [];

            // تهيئة الإعدادات الافتراضية
            if (!appData.settings.currency) appData.settings.currency = 'SYP';
            if (!appData.settings.currencySymbol) appData.settings.currencySymbol = 'ل.س';
            if (!appData.settings.taxRate) appData.settings.taxRate = 0;
            if (!appData.settings.nextInvoiceNumber) {
                appData.settings.nextInvoiceNumber = { sale: 1, purchase: 1 };
            }
            if (!appData.settings.exchangeRates) appData.settings.exchangeRates = {};

            console.log('✅ تم التحقق من الهياكل الأساسية');

        } catch (error) {
            console.error('❌ خطأ في تحميل البيانات:', error);
            console.log('🔧 إعادة تهيئة البيانات...');
            initializeDefaultData();
        }
    } else {
        console.log('📝 لا توجد بيانات محفوظة - تهيئة البيانات الافتراضية...');
        initializeDefaultData();
    }
}

/**
 * تهيئة البيانات الافتراضية
 */
function initializeDefaultData() {
    console.log('🔧 تهيئة البيانات الافتراضية...');

    appData = {
        settings: {
            companyName: 'شركة سام برو',
            companyAddress: '',
            companyPhone: '+963-998-171-954',
            companyEmail: '',
            taxNumber: '',
            currency: 'SYP',
            currencySymbol: 'ل.س',
            taxRate: 0,
            password: '123',
            enableMultiCurrency: false,
            exchangeRates: {},
            nextInvoiceNumber: { sale: 1, purchase: 1 }
        },
        customers: [],
        suppliers: [],
        products: [],
        warehouses: [
            {
                id: 1,
                name: 'المخزن الرئيسي',
                location: 'المكتب الرئيسي',
                manager: 'مدير المخزن',
                phone: '',
                createdAt: new Date().toISOString().split('T')[0]
            }
        ],
        invoices: [],
        payments: [],
        journalEntries: [],
        inventoryMovements: []
    };

    console.log('✅ تم تهيئة البيانات الافتراضية');
    saveData();
}

// تحميل البيانات عند بدء التطبيق
loadData();

// ========== نظام الثيم المضيء والمظلم ==========

/**
 * تبديل الثيم بين المضيء والمظلم
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // تحديث أيقونة الثيم
    updateThemeIcon(newTheme);
}

/**
 * تحديث أيقونة الثيم
 */
function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-sun me-2';
            // تحديث النص في القائمة المنسدلة
            const parentLink = themeIcon.closest('a');
            if (parentLink) {
                parentLink.innerHTML = '<i class="fas fa-sun me-2" id="theme-icon"></i>الثيم المضيء';
            }
        } else {
            themeIcon.className = 'fas fa-moon me-2';
            // تحديث النص في القائمة المنسدلة
            const parentLink = themeIcon.closest('a');
            if (parentLink) {
                parentLink.innerHTML = '<i class="fas fa-moon me-2" id="theme-icon"></i>الثيم المظلم';
            }
        }
    }
}

/**
 * تحميل الثيم المحفوظ
 */
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

/**
 * تطبيق الثيم على النوافذ المنبثقة
 */
function applyThemeToModal(modal) {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        modal.classList.add('dark-theme');
    }
}

// تحميل الثيم عند بدء التطبيق
document.addEventListener('DOMContentLoaded', function() {
    loadSavedTheme();
});

// ========== وظائف التصفية المتقدمة ==========

/**
 * تطبيق فلاتر فواتير المبيعات
 */
function applySalesInvoicesFilter() {
    const customerFilter = document.getElementById('customerFilter')?.value || '';
    const statusFilter = document.getElementById('statusFilter')?.value || '';
    const fromDate = document.getElementById('salesFromDate')?.value || '';
    const toDate = document.getElementById('salesToDate')?.value || '';
    const searchText = document.getElementById('salesSearch')?.value.toLowerCase() || '';

    let filteredInvoices = appData.invoices.filter(inv => inv.invoiceType === 'sale');

    // تطبيق فلتر العميل
    if (customerFilter) {
        filteredInvoices = filteredInvoices.filter(inv => inv.customerId == customerFilter);
    }

    // تطبيق فلتر الحالة
    if (statusFilter) {
        filteredInvoices = filteredInvoices.filter(inv => inv.status === statusFilter);
    }

    // تطبيق فلتر التاريخ
    if (fromDate) {
        filteredInvoices = filteredInvoices.filter(inv => inv.invoiceDate >= fromDate);
    }
    if (toDate) {
        filteredInvoices = filteredInvoices.filter(inv => inv.invoiceDate <= toDate);
    }

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredInvoices = filteredInvoices.filter(inv => {
            const customer = appData.customers.find(c => c.id === inv.customerId);
            const customerName = customer ? customer.name.toLowerCase() : '';
            const invoiceNumber = inv.invoiceNumber.toLowerCase();

            return invoiceNumber.includes(searchText) || customerName.includes(searchText);
        });
    }

    // تحديث الجدول
    updateSalesInvoicesTable(filteredInvoices);
}

/**
 * مسح فلاتر فواتير المبيعات
 */
function clearSalesInvoicesFilter() {
    const customerFilter = document.getElementById('customerFilter');
    const statusFilter = document.getElementById('statusFilter');
    const fromDate = document.getElementById('salesFromDate');
    const toDate = document.getElementById('salesToDate');
    const searchText = document.getElementById('salesSearch');

    if (customerFilter) customerFilter.value = '';
    if (statusFilter) statusFilter.value = '';
    if (fromDate) fromDate.value = '';
    if (toDate) toDate.value = '';
    if (searchText) searchText.value = '';

    // عرض جميع الفواتير
    const allSalesInvoices = appData.invoices.filter(inv => inv.invoiceType === 'sale');
    updateSalesInvoicesTable(allSalesInvoices);
}

/**
 * تحديث جدول فواتير المبيعات
 */
function updateSalesInvoicesTable(invoices) {
    const tableContainer = document.querySelector('#main-content .card:last-child .card-body');
    if (!tableContainer) return;

    if (invoices.length > 0) {
        tableContainer.innerHTML = `
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>رقم الفاتورة</th>
                            <th>العميل</th>
                            <th>التاريخ</th>
                            <th>المبلغ الإجمالي</th>
                            <th>المدفوع</th>
                            <th>المتبقي</th>
                            <th>الحالة</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${getSalesInvoicesRows(invoices)}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        tableContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-file-invoice fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">لا توجد فواتير تطابق معايير البحث</h5>
                <p class="text-muted">جرب تغيير الفلاتر أو مسحها</p>
                <button class="btn btn-primary" onclick="clearSalesInvoicesFilter()">
                    <i class="fas fa-times me-2"></i>مسح الفلاتر
                </button>
            </div>
        `;
    }
}

/**
 * تطبيق فلاتر فواتير المشتريات
 */
function applyPurchaseInvoicesFilter() {
    const supplierFilter = document.getElementById('supplierFilter')?.value || '';
    const statusFilter = document.getElementById('purchaseStatusFilter')?.value || '';
    const fromDate = document.getElementById('purchaseFromDate')?.value || '';
    const toDate = document.getElementById('purchaseToDate')?.value || '';
    const searchText = document.getElementById('purchaseSearch')?.value.toLowerCase() || '';

    let filteredInvoices = appData.invoices.filter(inv => inv.invoiceType === 'purchase');

    // تطبيق فلتر المورد
    if (supplierFilter) {
        filteredInvoices = filteredInvoices.filter(inv => inv.supplierId == supplierFilter);
    }

    // تطبيق فلتر الحالة
    if (statusFilter) {
        filteredInvoices = filteredInvoices.filter(inv => inv.status === statusFilter);
    }

    // تطبيق فلتر التاريخ
    if (fromDate) {
        filteredInvoices = filteredInvoices.filter(inv => inv.invoiceDate >= fromDate);
    }
    if (toDate) {
        filteredInvoices = filteredInvoices.filter(inv => inv.invoiceDate <= toDate);
    }

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredInvoices = filteredInvoices.filter(inv => {
            const supplier = appData.suppliers.find(s => s.id === inv.supplierId);
            const supplierName = supplier ? supplier.name.toLowerCase() : '';
            const invoiceNumber = inv.invoiceNumber.toLowerCase();

            return invoiceNumber.includes(searchText) || supplierName.includes(searchText);
        });
    }

    // تحديث الجدول
    updatePurchaseInvoicesTable(filteredInvoices);
}

/**
 * مسح فلاتر فواتير المشتريات
 */
function clearPurchaseInvoicesFilter() {
    const supplierFilter = document.getElementById('supplierFilter');
    const statusFilter = document.getElementById('purchaseStatusFilter');
    const fromDate = document.getElementById('purchaseFromDate');
    const toDate = document.getElementById('purchaseToDate');
    const searchText = document.getElementById('purchaseSearch');

    if (supplierFilter) supplierFilter.value = '';
    if (statusFilter) statusFilter.value = '';
    if (fromDate) fromDate.value = '';
    if (toDate) toDate.value = '';
    if (searchText) searchText.value = '';

    // عرض جميع الفواتير
    const allPurchaseInvoices = appData.invoices.filter(inv => inv.invoiceType === 'purchase');
    updatePurchaseInvoicesTable(allPurchaseInvoices);
}

/**
 * تحديث جدول فواتير المشتريات
 */
function updatePurchaseInvoicesTable(invoices) {
    const tableContainer = document.getElementById('purchaseInvoicesTableContainer') ||
                          document.querySelector('#main-content .card:last-child .card-body');
    if (!tableContainer) return;

    if (invoices.length > 0) {
        tableContainer.innerHTML = `
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>رقم الفاتورة</th>
                            <th>المورد</th>
                            <th>التاريخ</th>
                            <th>المبلغ الإجمالي</th>
                            <th>المدفوع</th>
                            <th>المتبقي</th>
                            <th>الحالة</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${getPurchaseInvoicesRows(invoices)}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        tableContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">لا توجد فواتير تطابق معايير البحث</h5>
                <p class="text-muted">جرب تغيير الفلاتر أو مسحها</p>
                <button class="btn btn-primary" onclick="clearPurchaseInvoicesFilter()">
                    <i class="fas fa-times me-2"></i>مسح الفلاتر
                </button>
            </div>
        `;
    }
}

/**
 * تحديث جدول فواتير المبيعات
 */
function updateSalesInvoicesTable(invoices) {
    const tableContainer = document.getElementById('salesInvoicesTableContainer') ||
                          document.querySelector('#main-content .card:last-child .card-body');
    if (!tableContainer) return;

    if (invoices.length > 0) {
        tableContainer.innerHTML = `
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>رقم الفاتورة</th>
                            <th>العميل</th>
                            <th>التاريخ</th>
                            <th>المبلغ الإجمالي</th>
                            <th>المدفوع</th>
                            <th>المتبقي</th>
                            <th>الحالة</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${getSalesInvoicesRows(invoices)}
                    </tbody>
                </table>
            </div>
        `;
    } else {
        tableContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-file-invoice fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">لا توجد فواتير تطابق معايير البحث</h5>
                <p class="text-muted">جرب تغيير الفلاتر أو مسحها</p>
                <button class="btn btn-primary" onclick="clearSalesInvoicesFilter()">
                    <i class="fas fa-times me-2"></i>مسح الفلاتر
                </button>
            </div>
        `;
    }
}

/**
 * تطبيق فلاتر العملاء
 */
function applyCustomersFilter() {
    const searchText = document.getElementById('customerSearch')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('customerTypeFilter')?.value || '';
    const cityFilter = document.getElementById('customerCityFilter')?.value || '';

    let filteredCustomers = appData.customers;

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredCustomers = filteredCustomers.filter(customer => {
            const name = customer.name.toLowerCase();
            const phone = customer.phone.toLowerCase();
            const email = (customer.email || '').toLowerCase();

            return name.includes(searchText) || phone.includes(searchText) || email.includes(searchText);
        });
    }

    // تطبيق فلتر النوع
    if (typeFilter) {
        filteredCustomers = filteredCustomers.filter(customer => customer.type === typeFilter);
    }

    // تطبيق فلتر المدينة
    if (cityFilter) {
        filteredCustomers = filteredCustomers.filter(customer => customer.city === cityFilter);
    }

    // تحديث الجدول
    updateCustomersTable(filteredCustomers);
}

/**
 * تطبيق فلاتر الموردين
 */
function applySuppliersFilter() {
    const searchText = document.getElementById('supplierSearch')?.value.toLowerCase() || '';
    const typeFilter = document.getElementById('supplierTypeFilter')?.value || '';
    const balanceFilter = document.getElementById('supplierBalanceFilter')?.value || '';

    let filteredSuppliers = appData.suppliers;

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredSuppliers = filteredSuppliers.filter(supplier => {
            const name = supplier.name.toLowerCase();
            const phone = (supplier.phone || '').toLowerCase();
            const email = (supplier.email || '').toLowerCase();

            return name.includes(searchText) || phone.includes(searchText) || email.includes(searchText);
        });
    }

    // تطبيق فلتر النوع
    if (typeFilter) {
        filteredSuppliers = filteredSuppliers.filter(supplier => supplier.type === typeFilter);
    }

    // تطبيق فلتر حالة الرصيد
    if (balanceFilter) {
        filteredSuppliers = filteredSuppliers.filter(supplier => {
            const balance = supplier.currentBalance || 0;
            switch (balanceFilter) {
                case 'positive': return balance > 0;
                case 'negative': return balance < 0;
                case 'zero': return balance === 0;
                default: return true;
            }
        });
    }

    // تحديث الجدول
    updateSuppliersTable(filteredSuppliers);
}

/**
 * مسح فلاتر الموردين
 */
function clearSuppliersFilter() {
    const searchInput = document.getElementById('supplierSearch');
    const typeFilter = document.getElementById('supplierTypeFilter');
    const balanceFilter = document.getElementById('supplierBalanceFilter');

    if (searchInput) searchInput.value = '';
    if (typeFilter) typeFilter.value = '';
    if (balanceFilter) balanceFilter.value = '';

    // عرض جميع الموردين
    updateSuppliersTable(appData.suppliers);
}

/**
 * تحديث جدول الموردين
 */
function updateSuppliersTable(suppliers) {
    const tableContainer = document.querySelector('#suppliersTable tbody') ||
                          document.querySelector('#main-content .table tbody');
    if (!tableContainer) return;

    if (suppliers.length > 0) {
        tableContainer.innerHTML = suppliers.map(supplier => `
            <tr>
                <td>
                    <strong>${supplier.name}</strong>
                    ${supplier.taxNumber ? `<br><small class="text-muted">الرقم الضريبي: ${supplier.taxNumber}</small>` : ''}
                </td>
                <td>${supplier.phone || '-'}</td>
                <td>${supplier.email || '-'}</td>
                <td>
                    <span class="badge bg-${supplier.currentBalance > 0 ? 'success' : supplier.currentBalance < 0 ? 'danger' : 'secondary'}">
                        ${formatCurrency(supplier.currentBalance || 0)}
                        ${supplier.currentBalance > 0 ? '(دائن)' : supplier.currentBalance < 0 ? '(مدين)' : '(متوازن)'}
                    </span>
                </td>
                <td>${supplier.createdAt}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="editSupplier(${supplier.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="viewSupplierStatement(${supplier.id})" title="كشف حساب">
                            <i class="fas fa-file-alt"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteSupplier(${supplier.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `).join('');
    } else {
        tableContainer.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted py-4">
                    <i class="fas fa-truck fa-3x mb-3"></i>
                    <h5>لا توجد موردين تطابق معايير البحث</h5>
                    <p>جرب تغيير الفلاتر أو مسحها</p>
                    <button class="btn btn-primary" onclick="clearSuppliersFilter()">
                        <i class="fas fa-times me-2"></i>مسح الفلاتر
                    </button>
                </td>
            </tr>
        `;
    }
}

/**
 * تطبيق فلاتر الأصناف
 */
function applyProductsFilter() {
    const searchText = document.getElementById('productSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('productCategoryFilter')?.value || '';
    const warehouseFilter = document.getElementById('productWarehouseFilter')?.value || '';
    const stockFilter = document.getElementById('productStockFilter')?.value || '';

    let filteredProducts = appData.products;

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredProducts = filteredProducts.filter(product => {
            const name = product.name.toLowerCase();
            const code = product.code.toLowerCase();
            const description = (product.description || '').toLowerCase();

            return name.includes(searchText) || code.includes(searchText) || description.includes(searchText);
        });
    }

    // تطبيق فلتر الفئة
    if (categoryFilter) {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter);
    }

    // تطبيق فلتر المخزن
    if (warehouseFilter) {
        filteredProducts = filteredProducts.filter(product => product.warehouseId == warehouseFilter);
    }

    // تطبيق فلتر حالة المخزون
    if (stockFilter) {
        filteredProducts = filteredProducts.filter(product => {
            const quantity = product.quantity || 0;
            const minQuantity = product.minQuantity || 0;

            switch (stockFilter) {
                case 'low': return quantity <= minQuantity && quantity > 0;
                case 'normal': return quantity > minQuantity;
                case 'out': return quantity === 0;
                default: return true;
            }
        });
    }

    // تحديث الجدول
    updateProductsTable(filteredProducts);
}

/**
 * مسح فلاتر الأصناف
 */
function clearProductsFilter() {
    const searchInput = document.getElementById('productSearch');
    const categoryFilter = document.getElementById('productCategoryFilter');
    const warehouseFilter = document.getElementById('productWarehouseFilter');
    const stockFilter = document.getElementById('productStockFilter');

    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (warehouseFilter) warehouseFilter.value = '';
    if (stockFilter) stockFilter.value = '';

    // عرض جميع الأصناف
    updateProductsTable(appData.products);
}

/**
 * تحديث جدول الأصناف
 */
function updateProductsTable(products) {
    const tableContainer = document.querySelector('#productsTable tbody') ||
                          document.querySelector('#main-content .table tbody');
    if (!tableContainer) return;

    if (products.length > 0) {
        tableContainer.innerHTML = products.map(product => {
            const isLowStock = product.quantity <= product.minQuantity;
            return `
                <tr class="${isLowStock ? 'table-warning' : ''}">
                    <td><strong>${product.code}</strong></td>
                    <td>
                        ${product.name}
                        ${product.description ? `<br><small class="text-muted">${product.description}</small>` : ''}
                    </td>
                    <td>${product.unit}</td>
                    <td>${formatCurrency(product.costPrice)}</td>
                    <td>${formatCurrency(product.sellingPrice)}</td>
                    <td>
                        <span class="badge bg-${isLowStock ? 'danger' : 'success'}">
                            ${product.quantity} ${product.unit}
                        </span>
                    </td>
                    <td>${product.minQuantity} ${product.unit}</td>
                    <td>
                        ${isLowStock ? '<i class="fas fa-exclamation-triangle text-warning" title="مخزون منخفض"></i>' : '<i class="fas fa-check-circle text-success" title="مخزون آمن"></i>'}
                    </td>
                    <td>
                        <div class="btn-group" role="group">
                            <button class="btn btn-sm btn-outline-primary" onclick="editProduct(${product.id})" title="تعديل">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-info" onclick="viewProductMovements(${product.id})" title="حركة المخزون">
                                <i class="fas fa-exchange-alt"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${product.id})" title="حذف">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    } else {
        tableContainer.innerHTML = `
            <tr>
                <td colspan="9" class="text-center text-muted py-4">
                    <i class="fas fa-boxes fa-3x mb-3"></i>
                    <h5>لا توجد أصناف تطابق معايير البحث</h5>
                    <p>جرب تغيير الفلاتر أو مسحها</p>
                    <button class="btn btn-primary" onclick="clearProductsFilter()">
                        <i class="fas fa-times me-2"></i>مسح الفلاتر
                    </button>
                </td>
            </tr>
        `;
    }
}

/**
 * تطبيق فلاتر سندات القبض
 */
function applyReceiptsFilter() {
    const customerFilter = document.getElementById('receiptCustomerFilter')?.value || '';
    const methodFilter = document.getElementById('receiptMethodFilter')?.value || '';
    const fromDate = document.getElementById('receiptFromDate')?.value || '';
    const toDate = document.getElementById('receiptToDate')?.value || '';
    const searchText = document.getElementById('receiptSearch')?.value.toLowerCase() || '';

    let filteredReceipts = appData.payments.filter(p => p.paymentType === 'receipt');

    // تطبيق فلتر العميل
    if (customerFilter) {
        filteredReceipts = filteredReceipts.filter(receipt => receipt.customerId == customerFilter);
    }

    // تطبيق فلتر طريقة الدفع
    if (methodFilter) {
        filteredReceipts = filteredReceipts.filter(receipt => receipt.paymentMethod === methodFilter);
    }

    // تطبيق فلتر التاريخ
    if (fromDate) {
        filteredReceipts = filteredReceipts.filter(receipt => receipt.paymentDate >= fromDate);
    }
    if (toDate) {
        filteredReceipts = filteredReceipts.filter(receipt => receipt.paymentDate <= toDate);
    }

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredReceipts = filteredReceipts.filter(receipt => {
            const customer = appData.customers.find(c => c.id === receipt.customerId);
            const customerName = customer ? customer.name.toLowerCase() : '';
            const receiptNumber = receipt.paymentNumber.toLowerCase();

            return receiptNumber.includes(searchText) || customerName.includes(searchText);
        });
    }

    // تحديث الجدول
    updateReceiptsTable(filteredReceipts);
}

/**
 * مسح فلاتر سندات القبض
 */
function clearReceiptsFilter() {
    const customerFilter = document.getElementById('receiptCustomerFilter');
    const methodFilter = document.getElementById('receiptMethodFilter');
    const fromDate = document.getElementById('receiptFromDate');
    const toDate = document.getElementById('receiptToDate');
    const searchText = document.getElementById('receiptSearch');

    if (customerFilter) customerFilter.value = '';
    if (methodFilter) methodFilter.value = '';
    if (fromDate) fromDate.value = '';
    if (toDate) toDate.value = '';
    if (searchText) searchText.value = '';

    // عرض جميع سندات القبض
    const allReceipts = appData.payments.filter(p => p.paymentType === 'receipt');
    updateReceiptsTable(allReceipts);
}

/**
 * تطبيق فلاتر سندات الدفع
 */
function applyPaymentsFilter() {
    const supplierFilter = document.getElementById('paymentSupplierFilter')?.value || '';
    const methodFilter = document.getElementById('paymentMethodFilter')?.value || '';
    const fromDate = document.getElementById('paymentFromDate')?.value || '';
    const toDate = document.getElementById('paymentToDate')?.value || '';
    const searchText = document.getElementById('paymentSearch')?.value.toLowerCase() || '';

    let filteredPayments = appData.payments.filter(p => p.paymentType === 'payment');

    // تطبيق فلتر المورد
    if (supplierFilter) {
        filteredPayments = filteredPayments.filter(payment => payment.supplierId == supplierFilter);
    }

    // تطبيق فلتر طريقة الدفع
    if (methodFilter) {
        filteredPayments = filteredPayments.filter(payment => payment.paymentMethod === methodFilter);
    }

    // تطبيق فلتر التاريخ
    if (fromDate) {
        filteredPayments = filteredPayments.filter(payment => payment.paymentDate >= fromDate);
    }
    if (toDate) {
        filteredPayments = filteredPayments.filter(payment => payment.paymentDate <= toDate);
    }

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredPayments = filteredPayments.filter(payment => {
            const supplier = appData.suppliers.find(s => s.id === payment.supplierId);
            const supplierName = supplier ? supplier.name.toLowerCase() : '';
            const paymentNumber = payment.paymentNumber.toLowerCase();

            return paymentNumber.includes(searchText) || supplierName.includes(searchText);
        });
    }

    // تحديث الجدول
    updatePaymentsTable(filteredPayments);
}

/**
 * مسح فلاتر سندات الدفع
 */
function clearPaymentsFilter() {
    const supplierFilter = document.getElementById('paymentSupplierFilter');
    const methodFilter = document.getElementById('paymentMethodFilter');
    const fromDate = document.getElementById('paymentFromDate');
    const toDate = document.getElementById('paymentToDate');
    const searchText = document.getElementById('paymentSearch');

    if (supplierFilter) supplierFilter.value = '';
    if (methodFilter) methodFilter.value = '';
    if (fromDate) fromDate.value = '';
    if (toDate) toDate.value = '';
    if (searchText) searchText.value = '';

    // عرض جميع سندات الدفع
    const allPayments = appData.payments.filter(p => p.paymentType === 'payment');
    updatePaymentsTable(allPayments);
}

/**
 * تحديث جدول سندات القبض
 */
function updateReceiptsTable(receipts) {
    const tableContainer = document.querySelector('#main-content .table tbody');
    if (!tableContainer) return;

    if (receipts.length > 0) {
        tableContainer.innerHTML = receipts.map(receipt => {
            const customer = appData.customers.find(c => c.id === receipt.customerId);
            return `
                <tr>
                    <td><strong>${receipt.paymentNumber}</strong></td>
                    <td>${customer ? customer.name : 'غير محدد'}</td>
                    <td>${receipt.paymentDate}</td>
                    <td>${formatCurrency(receipt.amount)}</td>
                    <td>${getPaymentMethodText(receipt.paymentMethod)}</td>
                    <td>${receipt.referenceNumber || '-'}</td>
                    <td><span class="badge bg-${getStatusColor(receipt.status)}">${getStatusText(receipt.status)}</span></td>
                    <td>
                        <div class="btn-group" role="group">
                            <button class="btn btn-sm btn-outline-primary" onclick="viewReceipt(${receipt.id})" title="عرض">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-success" onclick="printReceipt(${receipt.id})" title="طباعة">
                                <i class="fas fa-print"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-info" onclick="editReceipt(${receipt.id})" title="تعديل">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    } else {
        tableContainer.innerHTML = `
            <tr>
                <td colspan="8" class="text-center text-muted py-4">
                    <i class="fas fa-hand-holding-usd fa-3x mb-3"></i>
                    <h5>لا توجد سندات قبض تطابق معايير البحث</h5>
                    <p>جرب تغيير الفلاتر أو مسحها</p>
                    <button class="btn btn-primary" onclick="clearReceiptsFilter()">
                        <i class="fas fa-times me-2"></i>مسح الفلاتر
                    </button>
                </td>
            </tr>
        `;
    }
}

/**
 * تحديث جدول سندات الدفع
 */
function updatePaymentsTable(payments) {
    const tableContainer = document.querySelector('#main-content .table tbody');
    if (!tableContainer) return;

    if (payments.length > 0) {
        tableContainer.innerHTML = payments.map(payment => {
            const supplier = appData.suppliers.find(s => s.id === payment.supplierId);
            return `
                <tr>
                    <td><strong>${payment.paymentNumber}</strong></td>
                    <td>${supplier ? supplier.name : 'غير محدد'}</td>
                    <td>${payment.paymentDate}</td>
                    <td>${formatCurrency(payment.amount)}</td>
                    <td>${getPaymentMethodText(payment.paymentMethod)}</td>
                    <td>${payment.referenceNumber || '-'}</td>
                    <td><span class="badge bg-${getStatusColor(payment.status)}">${getStatusText(payment.status)}</span></td>
                    <td>
                        <div class="btn-group" role="group">
                            <button class="btn btn-sm btn-outline-primary" onclick="viewPayment(${payment.id})" title="عرض">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-success" onclick="printPayment(${payment.id})" title="طباعة">
                                <i class="fas fa-print"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-info" onclick="editPayment(${payment.id})" title="تعديل">
                                <i class="fas fa-edit"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        }).join('');
    } else {
        tableContainer.innerHTML = `
            <tr>
                <td colspan="8" class="text-center text-muted py-4">
                    <i class="fas fa-money-bill-wave fa-3x mb-3"></i>
                    <h5>لا توجد سندات دفع تطابق معايير البحث</h5>
                    <p>جرب تغيير الفلاتر أو مسحها</p>
                    <button class="btn btn-primary" onclick="clearPaymentsFilter()">
                        <i class="fas fa-times me-2"></i>مسح الفلاتر
                    </button>
                </td>
            </tr>
        `;
    }
}

/**
 * الحصول على نص طريقة الدفع
 */
function getPaymentMethodText(method) {
    const methods = {
        'cash': 'نقدي',
        'bank': 'تحويل بنكي',
        'check': 'شيك',
        'card': 'بطاقة ائتمان'
    };
    return methods[method] || method;
}

/**
 * تطبيق فلاتر دفتر اليومية
 */
function applyJournalFilter() {
    const typeFilter = document.getElementById('journalTypeFilter')?.value || '';
    const fromDate = document.getElementById('journalFromDate')?.value || '';
    const toDate = document.getElementById('journalToDate')?.value || '';
    const searchText = document.getElementById('journalSearch')?.value.toLowerCase() || '';

    let filteredEntries = appData.journalEntries || [];

    // تطبيق فلتر نوع العملية
    if (typeFilter) {
        filteredEntries = filteredEntries.filter(entry => {
            if (typeFilter === 'invoice') {
                return entry.invoiceId;
            } else if (typeFilter === 'payment') {
                return entry.paymentId;
            } else if (typeFilter === 'adjustment') {
                return !entry.invoiceId && !entry.paymentId;
            }
            return true;
        });
    }

    // تطبيق فلتر التاريخ
    if (fromDate) {
        filteredEntries = filteredEntries.filter(entry => entry.date >= fromDate);
    }
    if (toDate) {
        filteredEntries = filteredEntries.filter(entry => entry.date <= toDate);
    }

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredEntries = filteredEntries.filter(entry => {
            const description = entry.description.toLowerCase();
            const debitAccount = entry.debitAccount.toLowerCase();
            const creditAccount = entry.creditAccount.toLowerCase();
            const reference = (entry.reference || '').toLowerCase();

            return description.includes(searchText) ||
                   debitAccount.includes(searchText) ||
                   creditAccount.includes(searchText) ||
                   reference.includes(searchText);
        });
    }

    // تحديث الجدول
    updateJournalTable(filteredEntries);
}

/**
 * مسح فلاتر دفتر اليومية
 */
function clearJournalFilter() {
    const typeFilter = document.getElementById('journalTypeFilter');
    const fromDate = document.getElementById('journalFromDate');
    const toDate = document.getElementById('journalToDate');
    const searchText = document.getElementById('journalSearch');

    if (typeFilter) typeFilter.value = '';
    if (fromDate) fromDate.value = '';
    if (toDate) toDate.value = '';
    if (searchText) searchText.value = '';

    // عرض جميع القيود
    updateJournalTable(appData.journalEntries || []);
}

/**
 * تحديث جدول دفتر اليومية
 */
function updateJournalTable(entries) {
    const tableContainer = document.querySelector('#main-content .table tbody');
    if (!tableContainer) return;

    if (entries.length > 0) {
        let totalDebit = 0;
        let totalCredit = 0;

        tableContainer.innerHTML = entries.map(entry => {
            totalDebit += entry.debitAmount || 0;
            totalCredit += entry.creditAmount || 0;

            return `
                <tr>
                    <td>${entry.date}</td>
                    <td>
                        <span class="badge bg-${entry.invoiceId ? 'primary' : entry.paymentId ? 'success' : 'warning'}">
                            ${entry.invoiceId ? 'فاتورة' : entry.paymentId ? 'سند' : 'تسوية'}
                        </span>
                    </td>
                    <td>${entry.description}</td>
                    <td>${entry.debitAccount}</td>
                    <td>${entry.creditAccount}</td>
                    <td>${formatCurrency(entry.debitAmount || 0)}</td>
                    <td>${formatCurrency(entry.creditAmount || 0)}</td>
                    <td>${entry.reference || '-'}</td>
                </tr>
            `;
        }).join('');

        // تحديث الإجماليات
        const totalDebitElement = document.getElementById('totalDebit');
        const totalCreditElement = document.getElementById('totalCredit');
        if (totalDebitElement) totalDebitElement.textContent = formatCurrency(totalDebit);
        if (totalCreditElement) totalCreditElement.textContent = formatCurrency(totalCredit);

    } else {
        tableContainer.innerHTML = `
            <tr>
                <td colspan="8" class="text-center text-muted py-4">
                    <i class="fas fa-book fa-3x mb-3"></i>
                    <h5>لا توجد قيود تطابق معايير البحث</h5>
                    <p>جرب تغيير الفلاتر أو مسحها</p>
                    <button class="btn btn-primary" onclick="clearJournalFilter()">
                        <i class="fas fa-times me-2"></i>مسح الفلاتر
                    </button>
                </td>
            </tr>
        `;

        // إعادة تعيين الإجماليات
        const totalDebitElement = document.getElementById('totalDebit');
        const totalCreditElement = document.getElementById('totalCredit');
        if (totalDebitElement) totalDebitElement.textContent = formatCurrency(0);
        if (totalCreditElement) totalCreditElement.textContent = formatCurrency(0);
    }
}

/**
 * إضافة عنصر جديد للفاتورة
 */
function addInvoiceItem() {
    console.log('➕ إضافة عنصر جديد للفاتورة...');

    const tableBody = document.getElementById('invoiceItemsTable');
    if (!tableBody) {
        console.error('❌ جدول عناصر الفاتورة غير موجود');
        alert('خطأ: جدول عناصر الفاتورة غير موجود. يرجى إعادة تحميل الصفحة.');
        return;
    }

    console.log('📦 عدد الأصناف المتاحة:', appData.products.length);

    if (appData.products.length === 0) {
        alert('لا توجد أصناف متاحة. يرجى إضافة أصناف أولاً من صفحة الأصناف.');
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <select class="form-select item-product" onchange="updateItemPrice(this)" required>
                <option value="">اختر الصنف</option>
                ${appData.products.map(p => `<option value="${p.id}" data-price="${p.sellingPrice}" data-unit="${p.unit}">${p.name} (${p.quantity} ${p.unit})</option>`).join('')}
            </select>
        </td>
        <td>
            <input type="number" class="form-control item-quantity" min="1" step="1" value="1" onchange="calculateItemTotal(this)" required>
        </td>
        <td>
            <input type="number" class="form-control item-price" min="0" step="0.01" value="0" onchange="calculateItemTotal(this)" required>
        </td>
        <td>
            <input type="number" class="form-control item-discount" min="0" max="100" step="0.01" value="0" onchange="calculateItemTotal(this)">
        </td>
        <td>
            <span class="item-total fw-bold">0.00</span>
        </td>
        <td>
            <button type="button" class="btn btn-sm btn-danger" onclick="removeInvoiceItem(this)" title="حذف العنصر">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;

    tableBody.appendChild(row);
    console.log('✅ تم إضافة عنصر جديد للفاتورة. العدد الحالي:', tableBody.children.length);

    // تحديث الإجماليات
    calculateInvoiceTotals();
}

/**
 * حذف عنصر من الفاتورة
 */
function removeInvoiceItem(button) {
    const row = button.closest('tr');
    if (row) {
        row.remove();
        calculateInvoiceTotals();
        console.log('تم حذف عنصر من الفاتورة');
    }
}

/**
 * تحديث سعر الصنف عند اختياره
 */
function updateItemPrice(selectElement) {
    console.log('💰 تحديث سعر الصنف...');

    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const productId = selectElement.value;
    const price = selectedOption.getAttribute('data-price') || 0;
    const unit = selectedOption.getAttribute('data-unit') || '';
    const row = selectElement.closest('tr');
    const priceInput = row.querySelector('.item-price');
    const quantityInput = row.querySelector('.item-quantity');

    console.log('📊 معلومات الصنف:', { productId, price, unit });

    if (priceInput) {
        priceInput.value = parseFloat(price).toFixed(2);
        console.log('✅ تم تحديث السعر إلى:', price);
    }

    // التحقق من الكمية المتاحة
    if (productId && quantityInput) {
        const product = appData.products.find(p => p.id == productId);
        if (product) {
            const requestedQuantity = parseFloat(quantityInput.value) || 1;
            if (requestedQuantity > product.quantity) {
                alert(`تحذير: الكمية المطلوبة (${requestedQuantity}) أكبر من الكمية المتاحة (${product.quantity} ${product.unit})`);
                quantityInput.value = Math.min(requestedQuantity, product.quantity);
            }
        }
    }

    calculateItemTotal(priceInput || selectElement);
}

/**
 * حساب إجمالي العنصر
 */
function calculateItemTotal(element) {
    console.log('🧮 حساب إجمالي العنصر...');

    const row = element.closest('tr');
    if (!row) {
        console.error('❌ لا يمكن العثور على الصف');
        return;
    }

    const quantityInput = row.querySelector('.item-quantity');
    const priceInput = row.querySelector('.item-price');
    const discountInput = row.querySelector('.item-discount');
    const totalSpan = row.querySelector('.item-total');

    if (!quantityInput || !priceInput || !totalSpan) {
        console.error('❌ عناصر الصف مفقودة');
        return;
    }

    const quantity = parseFloat(quantityInput.value) || 0;
    const price = parseFloat(priceInput.value) || 0;
    const discount = discountInput ? parseFloat(discountInput.value) || 0 : 0;

    console.log('📊 قيم العنصر:', { quantity, price, discount });

    const subtotal = quantity * price;
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal - discountAmount;

    console.log('💰 الحسابات:', { subtotal, discountAmount, total });

    const currencySymbol = appData.settings.currencySymbol || 'ل.س';
    totalSpan.textContent = `${total.toFixed(2)} ${currencySymbol}`;

    console.log('✅ تم تحديث إجمالي العنصر:', total);

    calculateInvoiceTotals();
}

/**
 * حساب إجماليات الفاتورة
 */
function calculateInvoiceTotals() {
    console.log('🧮 حساب إجماليات الفاتورة...');

    const rows = document.querySelectorAll('#invoiceItemsTable tr');
    let subtotal = 0;

    console.log('📊 عدد صفوف العناصر:', rows.length);

    rows.forEach((row, index) => {
        const totalSpan = row.querySelector('.item-total');
        if (totalSpan) {
            const itemTotal = parseFloat(totalSpan.textContent.replace(/[^\d.-]/g, '')) || 0;
            subtotal += itemTotal;
            console.log(`📦 العنصر ${index + 1}: ${itemTotal}`);
        }
    });

    console.log('💰 المجموع الفرعي:', subtotal);

    const discountPercentageElement = document.getElementById('discountPercentage');
    const taxPercentageElement = document.getElementById('taxPercentage');

    const discountPercentage = discountPercentageElement ? parseFloat(discountPercentageElement.value) || 0 : 0;
    const taxPercentage = taxPercentageElement ? parseFloat(taxPercentageElement.value) || 0 : 0;

    console.log('📊 النسب:', { discountPercentage, taxPercentage });

    const discountAmount = subtotal * (discountPercentage / 100);
    const taxableAmount = subtotal - discountAmount;
    const taxAmount = taxableAmount * (taxPercentage / 100);
    const totalAmount = taxableAmount + taxAmount;

    console.log('💰 الحسابات النهائية:', { subtotal, discountAmount, taxAmount, totalAmount });

    // تحديث العرض
    const currencySymbol = appData.settings.currencySymbol || 'ل.س';

    const subtotalElement = document.getElementById('subtotalAmount');
    const discountAmountElement = document.getElementById('discountAmount');
    const taxAmountElement = document.getElementById('taxAmount');
    const totalAmountElement = document.getElementById('totalAmount');

    if (subtotalElement) subtotalElement.textContent = `${subtotal.toFixed(2)} ${currencySymbol}`;
    if (discountAmountElement) discountAmountElement.textContent = `${discountAmount.toFixed(2)} ${currencySymbol}`;
    if (taxAmountElement) taxAmountElement.textContent = `${taxAmount.toFixed(2)} ${currencySymbol}`;
    if (totalAmountElement) totalAmountElement.textContent = `${totalAmount.toFixed(2)} ${currencySymbol}`;

    console.log('✅ تم تحديث عرض الإجماليات');

    return { subtotal, discountAmount, taxAmount, totalAmount };
}

/**
 * تحديث خيارات العميل/المورد حسب نوع الفاتورة
 */
function updateClientOptions() {
    console.log('🔄 تحديث خيارات العميل/المورد...');

    const invoiceType = document.getElementById('invoiceType').value;
    const clientSelect = document.getElementById('clientSelect');
    const clientLabel = document.getElementById('clientLabel');

    if (!clientSelect || !clientLabel) {
        console.warn('⚠️ عناصر العميل غير موجودة');
        return;
    }

    clientSelect.innerHTML = '<option value="">اختر العميل/المورد</option>';

    if (invoiceType === 'sale') {
        clientLabel.textContent = 'العميل';
        console.log('📊 عدد العملاء:', appData.customers.length);

        if (appData.customers && appData.customers.length > 0) {
            appData.customers.forEach(customer => {
                const option = document.createElement('option');
                option.value = customer.id;
                option.textContent = customer.name;
                clientSelect.appendChild(option);
            });
            console.log('✅ تم تحديث قائمة العملاء');
        } else {
            console.warn('⚠️ لا توجد عملاء');
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'لا توجد عملاء - اضغط "إصلاح مشكلة الحفظ"';
            option.disabled = true;
            clientSelect.appendChild(option);
        }
    } else if (invoiceType === 'purchase') {
        clientLabel.textContent = 'المورد';
        console.log('📊 عدد الموردين:', appData.suppliers.length);

        if (appData.suppliers && appData.suppliers.length > 0) {
            appData.suppliers.forEach(supplier => {
                const option = document.createElement('option');
                option.value = supplier.id;
                option.textContent = supplier.name;
                clientSelect.appendChild(option);
            });
            console.log('✅ تم تحديث قائمة الموردين');
        } else {
            console.warn('⚠️ لا توجد موردين');
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'لا توجد موردين - اضغط "إصلاح مشكلة الحفظ"';
            option.disabled = true;
            clientSelect.appendChild(option);
        }
    }

    // تحديث رقم الفاتورة
    if (invoiceType) {
        const invoiceNumber = generateInvoiceNumber(invoiceType);
        const invoiceNumberInput = document.getElementById('invoiceNumber');
        if (invoiceNumberInput) {
            invoiceNumberInput.value = invoiceNumber;
            console.log('✅ تم تحديث رقم الفاتورة:', invoiceNumber);
        }
    }
}

/**
 * تهيئة صفحة إنشاء الفاتورة
 */
function initializeCreateInvoicePage() {
    console.log('🚀 تهيئة صفحة إنشاء الفاتورة...');

    // تعيين التاريخ الحالي
    const today = new Date().toISOString().split('T')[0];
    const invoiceDateInput = document.getElementById('invoiceDate');
    if (invoiceDateInput) {
        invoiceDateInput.value = today;
        console.log('📅 تم تعيين التاريخ الحالي:', today);
    } else {
        console.warn('⚠️ حقل تاريخ الفاتورة غير موجود');
    }

    // تعيين تاريخ الاستحقاق (بعد 30 يوم)
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 30);
    const dueDateInput = document.getElementById('dueDate');
    if (dueDateInput) {
        dueDateInput.value = dueDate.toISOString().split('T')[0];
        console.log('📅 تم تعيين تاريخ الاستحقاق:', dueDate.toISOString().split('T')[0]);
    }

    // تعيين نسبة الضريبة الافتراضية
    const taxPercentageInput = document.getElementById('taxPercentage');
    if (taxPercentageInput && appData.settings.taxRate) {
        taxPercentageInput.value = appData.settings.taxRate;
        console.log('💰 تم تعيين نسبة الضريبة الافتراضية:', appData.settings.taxRate);
    }

    // إضافة عنصر واحد افتراضي
    setTimeout(() => {
        console.log('➕ إضافة عنصر افتراضي...');
        addInvoiceItem();
        console.log('✅ تم تهيئة صفحة إنشاء الفاتورة بنجاح');
    }, 200);
}

/**
 * اختبار حفظ الفواتير
 */
function testInvoiceSave() {
    console.log('🧪 اختبار حفظ الفواتير...');

    // التحقق من وجود العناصر المطلوبة
    const requiredElements = [
        'invoiceType',
        'clientSelect',
        'invoiceDate',
        'invoiceItemsTable'
    ];

    const missingElements = [];
    requiredElements.forEach(id => {
        const element = document.getElementById(id);
        if (!element) {
            missingElements.push(id);
        } else {
            console.log(`✅ ${id}: موجود`);
        }
    });

    if (missingElements.length > 0) {
        console.error('❌ عناصر مفقودة:', missingElements);
        alert(`عناصر مفقودة في النموذج: ${missingElements.join(', ')}`);
        return false;
    }

    // التحقق من وجود بيانات اختبار
    if (!appData.customers || appData.customers.length === 0) {
        console.warn('⚠️ لا توجد عملاء');
        if (confirm('لا توجد عملاء. هل تريد إضافة بيانات تجريبية؟')) {
            createSampleData();
            return true;
        }
        return false;
    }

    if (!appData.products || appData.products.length === 0) {
        console.warn('⚠️ لا توجد أصناف');
        if (confirm('لا توجد أصناف. هل تريد إضافة بيانات تجريبية؟')) {
            createSampleData();
            return true;
        }
        return false;
    }

    console.log('✅ جميع العناصر المطلوبة موجودة');
    console.log('✅ البيانات الأساسية متوفرة');
    console.log('🎉 النظام جاهز لحفظ الفواتير');

    return true;
}

/**
 * إنشاء بيانات تجريبية
 */
function createSampleData() {
    console.log('🔧 إنشاء بيانات تجريبية...');

    // إضافة عملاء تجريبيين
    if (!appData.customers || appData.customers.length === 0) {
        appData.customers = [
            {
                id: 1,
                name: 'أحمد محمد',
                phone: '0991234567',
                email: 'ahmed@example.com',
                address: 'دمشق - المزة',
                taxNumber: '123456789',
                creditLimit: 10000,
                currency: appData.settings.currency || 'SYP',
                currentBalance: 0,
                createdAt: new Date().toISOString().split('T')[0]
            },
            {
                id: 2,
                name: 'فاطمة علي',
                phone: '0992345678',
                email: 'fatima@example.com',
                address: 'حلب - الشهباء',
                taxNumber: '987654321',
                creditLimit: 15000,
                currency: appData.settings.currency || 'SYP',
                currentBalance: 0,
                createdAt: new Date().toISOString().split('T')[0]
            }
        ];
        console.log('✅ تم إضافة عملاء تجريبيين');
    }

    // إضافة موردين تجريبيين
    if (!appData.suppliers || appData.suppliers.length === 0) {
        appData.suppliers = [
            {
                id: 1,
                name: 'شركة التوريدات المتقدمة',
                phone: '0113456789',
                email: 'supplies@example.com',
                address: 'دمشق - التجارة',
                taxNumber: '555666777',
                currency: appData.settings.currency || 'SYP',
                currentBalance: 0,
                createdAt: new Date().toISOString().split('T')[0]
            }
        ];
        console.log('✅ تم إضافة موردين تجريبيين');
    }

    // إضافة أصناف تجريبية
    if (!appData.products || appData.products.length === 0) {
        appData.products = [
            {
                id: 1,
                name: 'لابتوب ديل',
                code: 'DELL001',
                category: 'إلكترونيات',
                unit: 'قطعة',
                purchasePrice: 800,
                sellingPrice: 1000,
                quantity: 10,
                minQuantity: 2,
                warehouseId: 1,
                createdAt: new Date().toISOString().split('T')[0]
            },
            {
                id: 2,
                name: 'ماوس لاسلكي',
                code: 'MOUSE001',
                category: 'إكسسوارات',
                unit: 'قطعة',
                purchasePrice: 15,
                sellingPrice: 25,
                quantity: 50,
                minQuantity: 10,
                warehouseId: 1,
                createdAt: new Date().toISOString().split('T')[0]
            },
            {
                id: 3,
                name: 'كيبورد ميكانيكي',
                code: 'KB001',
                category: 'إكسسوارات',
                unit: 'قطعة',
                purchasePrice: 40,
                sellingPrice: 60,
                quantity: 25,
                minQuantity: 5,
                warehouseId: 1,
                createdAt: new Date().toISOString().split('T')[0]
            }
        ];
        console.log('✅ تم إضافة أصناف تجريبية');
    }

    // حفظ البيانات
    saveData();
    console.log('✅ تم حفظ البيانات التجريبية');

    alert('تم إنشاء البيانات التجريبية بنجاح!\n\n- 2 عميل\n- 1 مورد\n- 3 أصناف\n\nيمكنك الآن إنشاء الفواتير.');

    // إعادة تحميل الصفحة لتطبيق البيانات الجديدة
    showPage('create-invoice');
}

/**
 * اختبار سريع لحفظ الفواتير
 */
function quickTest() {
    console.log('🚀 اختبار سريع لحفظ الفواتير...');

    // إنشاء البيانات إذا لم توجد
    if (!appData.customers || appData.customers.length === 0 || !appData.products || appData.products.length === 0) {
        createSampleData();
        setTimeout(() => {
            performQuickTest();
        }, 500);
    } else {
        performQuickTest();
    }
}

/**
 * تنفيذ الاختبار السريع
 */
function performQuickTest() {
    console.log('⚡ تنفيذ الاختبار السريع...');

    // ملء النموذج تلقائياً
    fillFormAutomatically();

    // انتظار قليل ثم محاولة الحفظ
    setTimeout(() => {
        console.log('💾 محاولة حفظ الفاتورة...');

        if (confirm('هل تريد حفظ فاتورة تجريبية الآن؟')) {
            const result = saveInvoiceSimple('confirmed');

            if (result) {
                console.log('🎉 نجح الاختبار السريع!');
                alert('🎉 نجح الاختبار السريع!\n\nتم حفظ الفاتورة بنجاح. النظام يعمل بشكل مثالي!');
            } else {
                console.log('❌ فشل الاختبار السريع');
                alert('❌ فشل الاختبار السريع\n\nيرجى التحقق من البيانات والمحاولة مرة أخرى.');
            }
        }
    }, 1000);
}

/**
 * مسح فلاتر العملاء
 */
function clearCustomersFilter() {
    const searchInput = document.getElementById('customerSearch');
    const typeFilter = document.getElementById('customerTypeFilter');
    const cityFilter = document.getElementById('customerCityFilter');

    if (searchInput) searchInput.value = '';
    if (typeFilter) typeFilter.value = '';
    if (cityFilter) cityFilter.value = '';

    // عرض جميع العملاء
    updateCustomersTable(appData.customers);
}

/**
 * تحديث جدول العملاء
 */
function updateCustomersTable(customers) {
    const tableContainer = document.querySelector('#customersTable tbody') ||
                          document.querySelector('#main-content .table tbody');
    if (!tableContainer) return;

    if (customers.length > 0) {
        tableContainer.innerHTML = customers.map(customer => `
            <tr>
                <td><strong>${customer.name}</strong></td>
                <td>${customer.phone}</td>
                <td>${customer.email || 'غير محدد'}</td>
                <td>${formatCurrency(customer.balance || 0)}</td>
                <td>${formatCurrency(customer.creditLimit || 0)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="editCustomer(${customer.id})" title="تعديل">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteCustomer(${customer.id})" title="حذف">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-info" onclick="showPage('customer-statement')" title="كشف حساب">
                        <i class="fas fa-file-alt"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    } else {
        tableContainer.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted py-4">
                    <i class="fas fa-users fa-3x mb-3"></i>
                    <h5>لا توجد عملاء تطابق معايير البحث</h5>
                    <p>جرب تغيير الفلاتر أو مسحها</p>
                    <button class="btn btn-primary" onclick="clearCustomersFilter()">
                        <i class="fas fa-times me-2"></i>مسح الفلاتر
                    </button>
                </td>
            </tr>
        `;
    }
}

/**
 * عرض صفحة معينة
 */
function showPage(pageName) {
    const mainContent = document.getElementById('main-content');
    
    switch(pageName) {
        case 'dashboard':
            mainContent.innerHTML = getDashboardHTML();
            break;
        case 'customers':
            mainContent.innerHTML = getCustomersHTML();
            break;
        case 'add-customer':
            mainContent.innerHTML = getAddCustomerHTML();
            break;
        case 'suppliers':
            mainContent.innerHTML = getSuppliersHTML();
            break;
        case 'products':
            mainContent.innerHTML = getProductsHTML();
            break;
        case 'create-invoice':
            mainContent.innerHTML = getCreateInvoiceHTML();
            setTimeout(() => {
                initializeCreateInvoicePage();
            }, 100);
            break;
        case 'add-supplier':
            mainContent.innerHTML = getAddSupplierHTML();
            break;
        case 'warehouses':
            mainContent.innerHTML = getWarehousesHTML();
            break;
        case 'inventory':
            mainContent.innerHTML = getInventoryHTML();
            break;
        case 'sales-invoices':
            mainContent.innerHTML = getSalesInvoicesHTML();
            break;
        case 'purchase-invoices':
            mainContent.innerHTML = getPurchaseInvoicesHTML();
            break;
        case 'receipts':
            mainContent.innerHTML = getReceiptsHTML();
            break;
        case 'payments':
            mainContent.innerHTML = getPaymentsHTML();
            break;
        case 'journal':
            mainContent.innerHTML = getJournalHTML();
            break;
        case 'customer-statement':
            mainContent.innerHTML = getCustomerStatementHTML();
            break;
        case 'sales-report':
            mainContent.innerHTML = getSalesReportHTML();
            break;
        case 'purchase-report':
            mainContent.innerHTML = getPurchaseReportHTML();
            break;
        case 'customer-payments-report':
            mainContent.innerHTML = getCustomerPaymentsReportHTML();
            break;
        case 'supplier-payments-report':
            mainContent.innerHTML = getSupplierPaymentsReportHTML();
            break;
        case 'supplier-statement':
            mainContent.innerHTML = getSupplierStatementHTML();
            break;
        case 'add-product':
            mainContent.innerHTML = getAddProductHTML();
            break;
        case 'settings':
            mainContent.innerHTML = getSettingsHTML();
            break;
        case 'login':
            mainContent.innerHTML = getLoginHTML();
            break;
        case 'backup':
            mainContent.innerHTML = getBackupHTML();
            break;
        default:
            mainContent.innerHTML = getComingSoonHTML(pageName);
    }
    
    // إعادة تهيئة الأحداث
    initializePageEvents();
}

/**
 * لوحة التحكم
 */
function getDashboardHTML() {
    const stats = calculateStats();
    const lowStockProducts = appData.products.filter(p => p.quantity <= p.minQuantity);
    
    return `
        <div class="row">
            <div class="col-12">
                <h1 class="h3 mb-4">
                    <i class="fas fa-tachometer-alt me-2"></i>
                    لوحة التحكم
                </h1>
            </div>
        </div>

        <!-- إحصائيات سريعة -->
        <div class="row mb-4">
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-right-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col me-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">العملاء</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${stats.customersCount}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-right-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col me-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">الموردين</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${stats.suppliersCount}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-truck fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-right-info shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col me-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">الأصناف</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${stats.productsCount}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-boxes fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-right-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col me-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">الفواتير</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${stats.invoicesCount}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-file-invoice fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- إحصائيات مالية -->
        <div class="row mb-4">
            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-right-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col me-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">إجمالي المبيعات</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${formatCurrency(stats.totalSales)}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-right-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col me-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">المدفوعات المعلقة</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${formatCurrency(stats.pendingPayments)}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-clock fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-6 mb-4">
                <div class="card border-right-danger shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col me-2">
                                <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">منتجات منخفضة المخزون</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">${lowStockProducts.length}</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-exclamation-triangle fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <!-- آخر الفواتير -->
            <div class="col-lg-8 mb-4">
                <div class="card shadow">
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">آخر الفواتير</h6>
                        <button class="btn btn-sm btn-primary" onclick="showPage('sales-invoices')">عرض الكل</button>
                    </div>
                    <div class="card-body">
                        ${getRecentInvoicesTable()}
                    </div>
                </div>
            </div>

            <!-- المنتجات منخفضة المخزون -->
            <div class="col-lg-4 mb-4">
                <div class="card shadow">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-warning">
                            <i class="fas fa-exclamation-triangle me-2"></i>
                            منتجات منخفضة المخزون
                            <span class="badge bg-warning">${lowStockProducts.length}</span>
                        </h6>
                    </div>
                    <div class="card-body">
                        ${getLowStockProductsList(lowStockProducts)}
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * حساب الإحصائيات
 */
function calculateStats() {
    const salesInvoices = appData.invoices.filter(inv => inv.invoiceType === 'sale');
    const totalSales = salesInvoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
    const pendingPayments = appData.invoices.reduce((sum, inv) => sum + inv.remainingAmount, 0);

    return {
        customersCount: appData.customers.length,
        suppliersCount: appData.suppliers.length,
        productsCount: appData.products.length,
        invoicesCount: appData.invoices.length,
        totalSales: totalSales,
        pendingPayments: pendingPayments
    };
}

/**
 * جدول آخر الفواتير
 */
function getRecentInvoicesTable() {
    if (appData.invoices.length === 0) {
        return '<p class="text-center text-muted">لا توجد فواتير حتى الآن</p>';
    }

    const recentInvoices = appData.invoices.slice(-5).reverse();

    let html = `
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>رقم الفاتورة</th>
                        <th>النوع</th>
                        <th>العميل/المورد</th>
                        <th>المبلغ</th>
                        <th>التاريخ</th>
                        <th>الحالة</th>
                    </tr>
                </thead>
                <tbody>
    `;

    recentInvoices.forEach(invoice => {
        const customer = appData.customers.find(c => c.id === invoice.customerId);
        const supplier = appData.suppliers.find(s => s.id === invoice.supplierId);
        const clientName = customer ? customer.name : (supplier ? supplier.name : '-');

        html += `
            <tr>
                <td>${invoice.invoiceNumber}</td>
                <td>
                    <span class="badge bg-${invoice.invoiceType === 'sale' ? 'success' : 'info'}">
                        ${invoice.invoiceType === 'sale' ? 'مبيعات' : 'مشتريات'}
                    </span>
                </td>
                <td>${clientName}</td>
                <td>${formatCurrency(invoice.totalAmount)}</td>
                <td>${invoice.invoiceDate}</td>
                <td>
                    <span class="badge bg-${getStatusColor(invoice.status)}">
                        ${getStatusText(invoice.status)}
                    </span>
                </td>
            </tr>
        `;
    });

    html += `
                </tbody>
            </table>
        </div>
    `;

    return html;
}

/**
 * قائمة المنتجات منخفضة المخزون
 */
function getLowStockProductsList(products) {
    if (products.length === 0) {
        return '<p class="text-center text-muted">جميع المنتجات في مستوى آمن</p>';
    }

    let html = '';
    products.forEach(product => {
        html += `
            <div class="d-flex align-items-center border-bottom py-2">
                <div class="flex-grow-1">
                    <div class="fw-bold">${product.name}</div>
                    <small class="text-muted">${product.code}</small>
                </div>
                <div class="text-end">
                    <span class="badge bg-danger">${product.quantity} ${product.unit}</span>
                </div>
            </div>
        `;
    });

    return html;
}

/**
 * صفحة العملاء
 */
function getCustomersHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-users me-2"></i>
                        قائمة العملاء
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="showPage('add-customer')">
                            <i class="fas fa-plus me-2"></i>
                            إضافة عميل جديد
                        </button>
                        <button class="btn btn-outline-success" onclick="printContent('customers', 'قائمة العملاء')">
                            <i class="fas fa-print me-2"></i>
                            طباعة القائمة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <label class="form-label">البحث</label>
                        <input type="text" class="form-control" id="customerSearch" placeholder="البحث باسم العميل أو رقم الهاتف..." onkeyup="applyCustomersFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">نوع العميل</label>
                        <select class="form-select" id="customerTypeFilter" onchange="applyCustomersFilter()">
                            <option value="">جميع الأنواع</option>
                            <option value="individual">فرد</option>
                            <option value="company">شركة</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">المدينة</label>
                        <select class="form-select" id="customerCityFilter" onchange="applyCustomersFilter()">
                            <option value="">جميع المدن</option>
                            ${[...new Set(appData.customers.map(c => c.city).filter(city => city))].map(city =>
                                `<option value="${city}">${city}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">&nbsp;</label>
                        <div>
                            <button class="btn btn-outline-primary" onclick="applyCustomersFilter()">
                                <i class="fas fa-search me-2"></i>
                                بحث
                            </button>
                            <button class="btn btn-outline-secondary ms-2" onclick="clearCustomersFilter()">
                                <i class="fas fa-times me-2"></i>
                                مسح
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول العملاء -->
        <div class="card shadow">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover" id="customersTable">
                        <thead class="table-light">
                            <tr>
                                <th>الاسم</th>
                                <th>الهاتف</th>
                                <th>البريد الإلكتروني</th>
                                <th>الرصيد الحالي</th>
                                <th>حد الائتمان</th>
                                <th>تاريخ الإنشاء</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${getCustomersTableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفوف جدول العملاء
 */
function getCustomersTableRows() {
    if (appData.customers.length === 0) {
        return '<tr><td colspan="7" class="text-center text-muted">لا توجد عملاء</td></tr>';
    }

    let html = '';
    appData.customers.forEach(customer => {
        html += `
            <tr>
                <td>
                    <strong>${customer.name}</strong>
                    ${customer.taxNumber ? `<br><small class="text-muted">الرقم الضريبي: ${customer.taxNumber}</small>` : ''}
                </td>
                <td>${customer.phone || '-'}</td>
                <td>${customer.email || '-'}</td>
                <td>
                    <span class="badge bg-${customer.currentBalance > 0 ? 'danger' : customer.currentBalance < 0 ? 'success' : 'secondary'}">
                        ${formatCurrency(customer.currentBalance)}
                        ${customer.currentBalance > 0 ? '(مدين)' : customer.currentBalance < 0 ? '(دائن)' : '(متوازن)'}
                    </span>
                </td>
                <td>${formatCurrency(customer.creditLimit)}</td>
                <td>${customer.createdAt}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="editCustomer(${customer.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="viewCustomerStatement(${customer.id})" title="كشف حساب">
                            <i class="fas fa-file-alt"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteCustomer(${customer.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

/**
 * صفحة إضافة عميل
 */
function getAddCustomerHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-user-plus me-2"></i>
                        إضافة عميل جديد
                    </h1>
                    <button class="btn btn-outline-secondary" onclick="showPage('customers')">
                        <i class="fas fa-arrow-right me-2"></i>
                        العودة للقائمة
                    </button>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-user me-2"></i>
                            بيانات العميل
                        </h5>
                    </div>
                    <div class="card-body">
                        <form id="addCustomerForm" onsubmit="addCustomer(event)">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="customerName" class="form-label">
                                        <i class="fas fa-user me-1"></i>
                                        اسم العميل <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control" id="customerName" required>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="customerPhone" class="form-label">
                                        <i class="fas fa-phone me-1"></i>
                                        رقم الهاتف
                                    </label>
                                    <input type="tel" class="form-control" id="customerPhone">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="customerEmail" class="form-label">
                                        <i class="fas fa-envelope me-1"></i>
                                        البريد الإلكتروني
                                    </label>
                                    <input type="email" class="form-control" id="customerEmail">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="customerTaxNumber" class="form-label">
                                        <i class="fas fa-receipt me-1"></i>
                                        الرقم الضريبي
                                    </label>
                                    <input type="text" class="form-control" id="customerTaxNumber">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="customerAddress" class="form-label">
                                    <i class="fas fa-map-marker-alt me-1"></i>
                                    العنوان
                                </label>
                                <textarea class="form-control" id="customerAddress" rows="3"></textarea>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="customerCreditLimit" class="form-label">
                                        <i class="fas fa-credit-card me-1"></i>
                                        حد الائتمان
                                    </label>
                                    <input type="number" class="form-control" id="customerCreditLimit" min="0" step="0.01" value="0">
                                </div>
                                <div class="col-md-6 mb-3" ${appData.settings.enableMultiCurrency ? '' : 'style="display: none;"'}>
                                    <label for="customerCurrency" class="form-label">
                                        <i class="fas fa-coins me-1"></i>
                                        العملة
                                    </label>
                                    <select class="form-select" id="customerCurrency">
                                        <option value="${appData.settings.currency || 'SYP'}">${getCurrencySymbol(appData.settings.currency || 'SYP')} (العملة الأساسية)</option>
                                        ${appData.settings.enableMultiCurrency ? `
                                            <option value="USD">$ (الدولار الأمريكي)</option>
                                            <option value="EUR">€ (اليورو)</option>
                                            <option value="SAR">ر.س (الريال السعودي)</option>
                                            <option value="AED">د.إ (الدرهم الإماراتي)</option>
                                            <option value="EGP">ج.م (الجنيه المصري)</option>
                                            <option value="JOD">د.أ (الدينار الأردني)</option>
                                            <option value="LBP">ل.ل (الليرة اللبنانية)</option>
                                            <option value="TRY">₺ (الليرة التركية)</option>
                                            <option value="GBP">£ (الجنيه الإسترليني)</option>
                                        ` : ''}
                                    </select>
                                </div>
                            </div>

                            <div class="d-flex justify-content-end gap-2">
                                <button type="button" class="btn btn-secondary" onclick="showPage('customers')">
                                    <i class="fas fa-times me-2"></i>
                                    إلغاء
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-save me-2"></i>
                                    حفظ العميل
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة الموردين
 */
function getSuppliersHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-truck me-2"></i>
                        قائمة الموردين
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="showPage('add-supplier')">
                            <i class="fas fa-plus me-2"></i>
                            إضافة مورد جديد
                        </button>
                        <button class="btn btn-outline-success" onclick="printContent('suppliers', 'قائمة الموردين')">
                            <i class="fas fa-print me-2"></i>
                            طباعة القائمة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <label class="form-label">البحث</label>
                        <input type="text" class="form-control" id="supplierSearch" placeholder="البحث باسم المورد أو رقم الهاتف..." onkeyup="applySuppliersFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">نوع المورد</label>
                        <select class="form-select" id="supplierTypeFilter" onchange="applySuppliersFilter()">
                            <option value="">جميع الأنواع</option>
                            <option value="individual">فرد</option>
                            <option value="company">شركة</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">حالة الرصيد</label>
                        <select class="form-select" id="supplierBalanceFilter" onchange="applySuppliersFilter()">
                            <option value="">جميع الحالات</option>
                            <option value="positive">دائن</option>
                            <option value="negative">مدين</option>
                            <option value="zero">متوازن</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">&nbsp;</label>
                        <div>
                            <button class="btn btn-outline-primary" onclick="applySuppliersFilter()">
                                <i class="fas fa-search me-2"></i>
                                بحث
                            </button>
                            <button class="btn btn-outline-secondary ms-2" onclick="clearSuppliersFilter()">
                                <i class="fas fa-times me-2"></i>
                                مسح
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover" id="suppliersTable">
                        <thead class="table-light">
                            <tr>
                                <th>الاسم</th>
                                <th>الهاتف</th>
                                <th>البريد الإلكتروني</th>
                                <th>الرصيد الحالي</th>
                                <th>تاريخ الإنشاء</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${getSuppliersTableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفوف جدول الموردين
 */
function getSuppliersTableRows() {
    if (appData.suppliers.length === 0) {
        return '<tr><td colspan="6" class="text-center text-muted">لا توجد موردين</td></tr>';
    }

    let html = '';
    appData.suppliers.forEach(supplier => {
        html += `
            <tr>
                <td>
                    <strong>${supplier.name}</strong>
                    ${supplier.taxNumber ? `<br><small class="text-muted">الرقم الضريبي: ${supplier.taxNumber}</small>` : ''}
                </td>
                <td>${supplier.phone || '-'}</td>
                <td>${supplier.email || '-'}</td>
                <td>
                    <span class="badge bg-${supplier.currentBalance > 0 ? 'success' : supplier.currentBalance < 0 ? 'danger' : 'secondary'}">
                        ${formatCurrency(supplier.currentBalance)}
                        ${supplier.currentBalance > 0 ? '(دائن)' : supplier.currentBalance < 0 ? '(مدين)' : '(متوازن)'}
                    </span>
                </td>
                <td>${supplier.createdAt}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="editSupplier(${supplier.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="viewSupplierStatement(${supplier.id})" title="كشف حساب">
                            <i class="fas fa-file-alt"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteSupplier(${supplier.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

/**
 * صفحة الأصناف
 */
function getProductsHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-boxes me-2"></i>
                        قائمة الأصناف
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="showPage('add-product')">
                            <i class="fas fa-plus me-2"></i>
                            إضافة صنف جديد
                        </button>
                        <button class="btn btn-outline-success" onclick="printContent('products', 'قائمة الأصناف')">
                            <i class="fas fa-print me-2"></i>
                            طباعة القائمة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label">البحث</label>
                        <input type="text" class="form-control" id="productSearch" placeholder="البحث بالاسم أو الكود..." onkeyup="applyProductsFilter()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">الفئة</label>
                        <select class="form-select" id="productCategoryFilter" onchange="applyProductsFilter()">
                            <option value="">جميع الفئات</option>
                            ${[...new Set(appData.products.map(p => p.category).filter(cat => cat))].map(category =>
                                `<option value="${category}">${category}</option>`
                            ).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">المخزن</label>
                        <select class="form-select" id="productWarehouseFilter" onchange="applyProductsFilter()">
                            <option value="">جميع المخازن</option>
                            ${appData.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">حالة المخزون</label>
                        <select class="form-select" id="productStockFilter" onchange="applyProductsFilter()">
                            <option value="">جميع الحالات</option>
                            <option value="low">مخزون منخفض</option>
                            <option value="normal">مخزون آمن</option>
                            <option value="out">نفد المخزون</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">&nbsp;</label>
                        <div>
                            <button class="btn btn-outline-primary" onclick="applyProductsFilter()">
                                <i class="fas fa-search me-2"></i>
                                بحث
                            </button>
                            <button class="btn btn-outline-secondary ms-2" onclick="clearProductsFilter()">
                                <i class="fas fa-times me-2"></i>
                                مسح
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover" id="productsTable">
                        <thead class="table-light">
                            <tr>
                                <th>الكود</th>
                                <th>الاسم</th>
                                <th>الوحدة</th>
                                <th>سعر التكلفة</th>
                                <th>سعر البيع</th>
                                <th>الكمية</th>
                                <th>الحد الأدنى</th>
                                <th>الحالة</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${getProductsTableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفوف جدول الأصناف
 */
function getProductsTableRows() {
    if (appData.products.length === 0) {
        return '<tr><td colspan="9" class="text-center text-muted">لا توجد أصناف</td></tr>';
    }

    let html = '';
    appData.products.forEach(product => {
        const isLowStock = product.quantity <= product.minQuantity;
        html += `
            <tr class="${isLowStock ? 'table-warning' : ''}">
                <td><strong>${product.code}</strong></td>
                <td>
                    ${product.name}
                    ${product.description ? `<br><small class="text-muted">${product.description}</small>` : ''}
                </td>
                <td>${product.unit}</td>
                <td>${formatCurrency(product.costPrice)}</td>
                <td>${formatCurrency(product.sellingPrice)}</td>
                <td>
                    <span class="badge bg-${isLowStock ? 'danger' : 'success'}">
                        ${product.quantity} ${product.unit}
                    </span>
                </td>
                <td>${product.minQuantity} ${product.unit}</td>
                <td>
                    ${isLowStock ? '<i class="fas fa-exclamation-triangle text-warning" title="مخزون منخفض"></i>' : '<i class="fas fa-check-circle text-success" title="مخزون آمن"></i>'}
                </td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="editProduct(${product.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="viewProductMovements(${product.id})" title="حركة المخزون">
                            <i class="fas fa-exchange-alt"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteProduct(${product.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

/**
 * صفحة قريباً
 */
function getComingSoonHTML(pageName) {
    return `
        <div class="row justify-content-center">
            <div class="col-md-6 text-center">
                <div class="card shadow">
                    <div class="card-body py-5">
                        <i class="fas fa-tools fa-3x text-muted mb-3"></i>
                        <h3 class="text-muted">قريباً</h3>
                        <p class="text-muted">هذه الصفحة قيد التطوير</p>
                        <p class="text-muted">الصفحة المطلوبة: <strong>${pageName}</strong></p>
                        <button class="btn btn-primary" onclick="showPage('dashboard')">
                            <i class="fas fa-home me-2"></i>
                            العودة للرئيسية
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفوف جدول المخازن
 */
function getWarehousesTableRows() {
    if (appData.warehouses.length === 0) {
        return '<tr><td colspan="6" class="text-center text-muted">لا توجد مخازن</td></tr>';
    }

    let html = '';
    appData.warehouses.forEach(warehouse => {
        const productsCount = appData.products.filter(p => p.warehouseId === warehouse.id).length;
        html += `
            <tr>
                <td><strong>${warehouse.name}</strong></td>
                <td>${warehouse.location || '-'}</td>
                <td>${warehouse.manager || '-'}</td>
                <td>${warehouse.phone || '-'}</td>
                <td><span class="badge bg-info">${productsCount}</span></td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="editWarehouse(${warehouse.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-danger" onclick="deleteWarehouse(${warehouse.id})" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

/**
 * صفوف جدول حركة المخزون
 */
function getInventoryMovementsRows() {
    const movements = appData.inventoryMovements || [];

    if (movements.length === 0) {
        return '<tr><td colspan="9" class="text-center text-muted">لا توجد حركات مخزون</td></tr>';
    }

    let html = '';
    movements.forEach(movement => {
        const product = appData.products.find(p => p.id === movement.productId);
        const warehouse = appData.warehouses.find(w => w.id === movement.warehouseId);

        const typeText = {
            'in': 'إدخال',
            'out': 'إخراج',
            'transfer': 'تحويل',
            'adjustment': 'تسوية'
        };

        const typeColor = {
            'in': 'success',
            'out': 'danger',
            'transfer': 'info',
            'adjustment': 'warning'
        };

        html += `
            <tr>
                <td>${movement.date}</td>
                <td><span class="badge bg-${typeColor[movement.movementType]}">${typeText[movement.movementType]}</span></td>
                <td>${product ? product.name : 'منتج محذوف'}</td>
                <td>${warehouse ? warehouse.name : 'مخزن محذوف'}</td>
                <td>${movement.quantity}</td>
                <td>${formatCurrency(movement.unitPrice)}</td>
                <td>${formatCurrency(movement.totalAmount)}</td>
                <td>${movement.reference}</td>
                <td>${movement.notes || '-'}</td>
            </tr>
        `;
    });

    return html;
}

/**
 * صفوف جدول فواتير المبيعات
 */
function getSalesInvoicesRows(invoices) {
    let html = '';
    invoices.forEach(invoice => {
        const customer = appData.customers.find(c => c.id === invoice.customerId);
        html += `
            <tr>
                <td><strong>${invoice.invoiceNumber}</strong></td>
                <td>${customer ? customer.name : '-'}</td>
                <td>${invoice.invoiceDate}</td>
                <td>${formatCurrency(invoice.totalAmount)}</td>
                <td>${formatCurrency(invoice.paidAmount)}</td>
                <td>${formatCurrency(invoice.remainingAmount)}</td>
                <td><span class="badge bg-${getStatusColor(invoice.status)}">${getStatusText(invoice.status)}</span></td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewInvoice(${invoice.id})" title="عرض">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-success" onclick="printInvoice(${invoice.id})" title="طباعة">
                            <i class="fas fa-print"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="editInvoice(${invoice.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

/**
 * صفوف جدول فواتير المشتريات
 */
function getPurchaseInvoicesRows(invoices) {
    let html = '';
    invoices.forEach(invoice => {
        const supplier = appData.suppliers.find(s => s.id === invoice.supplierId);
        html += `
            <tr>
                <td><strong>${invoice.invoiceNumber}</strong></td>
                <td>${supplier ? supplier.name : '-'}</td>
                <td>${invoice.invoiceDate}</td>
                <td>${formatCurrency(invoice.totalAmount)}</td>
                <td>${formatCurrency(invoice.paidAmount)}</td>
                <td>${formatCurrency(invoice.remainingAmount)}</td>
                <td><span class="badge bg-${getStatusColor(invoice.status)}">${getStatusText(invoice.status)}</span></td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewInvoice(${invoice.id})" title="عرض">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-success" onclick="printInvoice(${invoice.id})" title="طباعة">
                            <i class="fas fa-print"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="editInvoice(${invoice.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

/**
 * إضافة عميل جديد
 */
function addCustomer(event) {
    event.preventDefault();

    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const taxNumber = document.getElementById('customerTaxNumber').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const creditLimit = parseFloat(document.getElementById('customerCreditLimit').value) || 0;
    const currency = document.getElementById('customerCurrency')?.value || appData.settings.currency || 'SYP';

    if (!name) {
        alert('يرجى إدخال اسم العميل');
        return;
    }

    // التحقق من عدم تكرار الاسم
    if (appData.customers.some(c => c.name === name)) {
        alert('يوجد عميل بنفس الاسم مسبقاً');
        return;
    }

    const newCustomer = {
        id: Date.now(),
        name: name,
        phone: phone,
        email: email,
        address: address,
        taxNumber: taxNumber,
        creditLimit: creditLimit,
        currency: currency,
        currentBalance: 0,
        createdAt: new Date().toISOString().split('T')[0]
    };

    appData.customers.push(newCustomer);
    saveData();

    alert('تم إضافة العميل بنجاح');
    showPage('customers');
}

/**
 * حذف عميل
 */
function deleteCustomer(customerId) {
    const customer = appData.customers.find(c => c.id === customerId);
    if (!customer) return;

    if (confirm(`هل أنت متأكد من حذف العميل "${customer.name}"؟`)) {
        // التحقق من وجود فواتير مرتبطة
        const hasInvoices = appData.invoices.some(inv => inv.customerId === customerId);
        if (hasInvoices) {
            alert('لا يمكن حذف العميل لوجود فواتير مرتبطة به');
            return;
        }

        appData.customers = appData.customers.filter(c => c.id !== customerId);
        saveData();

        alert('تم حذف العميل بنجاح');
        showPage('customers');
    }
}

/**
 * تصفية العملاء
 */
function filterCustomers() {
    const searchTerm = document.getElementById('customerSearch').value.toLowerCase();
    const table = document.getElementById('customersTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const text = row.textContent.toLowerCase();

        if (text.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

/**
 * تنسيق العملة
 */
function formatCurrency(amount) {
    const currencySymbol = appData.settings.currencySymbol || 'ل.س';
    return new Intl.NumberFormat('ar-SY', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount) + ' ' + currencySymbol;
}

/**
 * الحصول على لون الحالة
 */
function getStatusColor(status) {
    switch(status) {
        case 'confirmed': return 'success';
        case 'draft': return 'warning';
        case 'cancelled': return 'danger';
        case 'paid': return 'info';
        default: return 'secondary';
    }
}

/**
 * الحصول على نص الحالة
 */
function getStatusText(status) {
    switch(status) {
        case 'confirmed': return 'مؤكدة';
        case 'draft': return 'مسودة';
        case 'cancelled': return 'ملغية';
        case 'paid': return 'مدفوعة';
        default: return status;
    }
}

/**
 * إضافة منتج جديد
 */
function addNewProduct(event) {
    event.preventDefault();

    const code = document.getElementById('productCode').value.trim();
    const name = document.getElementById('productName').value.trim();
    const description = document.getElementById('productDescription').value.trim();
    const unit = document.getElementById('productUnit').value;
    const category = document.getElementById('productCategory').value;
    const warehouseId = parseInt(document.getElementById('productWarehouse').value);
    const costPrice = parseFloat(document.getElementById('productCostPrice').value);
    const sellingPrice = parseFloat(document.getElementById('productSellingPrice').value);
    const quantity = parseFloat(document.getElementById('productQuantity').value);
    const minQuantity = parseFloat(document.getElementById('productMinQuantity').value);
    const barcode = document.getElementById('productBarcode').value.trim();

    if (!code || !name || !unit || !warehouseId || costPrice < 0 || sellingPrice < 0 || quantity < 0 || minQuantity < 0) {
        alert('يرجى ملء جميع الحقول المطلوبة بقيم صحيحة');
        return;
    }

    // التحقق من عدم تكرار الكود
    if (appData.products.some(p => p.code === code)) {
        alert('يوجد منتج بنفس الكود مسبقاً');
        return;
    }

    const newProduct = {
        id: Date.now(),
        code: code,
        name: name,
        description: description,
        unit: unit,
        category: category,
        warehouseId: warehouseId,
        costPrice: costPrice,
        sellingPrice: sellingPrice,
        quantity: quantity,
        minQuantity: minQuantity,
        barcode: barcode,
        isActive: true,
        createdAt: new Date().toISOString().split('T')[0]
    };

    appData.products.push(newProduct);

    // إضافة حركة مخزون للكمية الأولية
    if (quantity > 0) {
        addInventoryMovement({
            productId: newProduct.id,
            warehouseId: warehouseId,
            movementType: 'in',
            quantity: quantity,
            unitPrice: costPrice,
            reference: 'إدخال أولي',
            notes: 'كمية أولية عند إضافة المنتج'
        });
    }

    saveData();

    alert('تم إضافة المنتج بنجاح');
    showPage('products');
}

/**
 * إضافة حركة مخزون
 */
function addInventoryMovement(movement) {
    if (!appData.inventoryMovements) {
        appData.inventoryMovements = [];
    }

    const newMovement = {
        id: Date.now(),
        date: new Date().toISOString().split('T')[0],
        productId: movement.productId,
        warehouseId: movement.warehouseId,
        movementType: movement.movementType, // 'in', 'out', 'transfer', 'adjustment'
        quantity: movement.quantity,
        unitPrice: movement.unitPrice || 0,
        totalAmount: movement.quantity * (movement.unitPrice || 0),
        reference: movement.reference || '',
        notes: movement.notes || '',
        createdAt: new Date().toISOString()
    };

    appData.inventoryMovements.push(newMovement);

    // تحديث كمية المنتج
    const product = appData.products.find(p => p.id === movement.productId);
    if (product) {
        if (movement.movementType === 'in') {
            product.quantity += movement.quantity;
        } else if (movement.movementType === 'out') {
            product.quantity -= movement.quantity;
        }
    }
}

/**
 * عرض نافذة إضافة حركة مخزون
 */
function showAddMovementModal() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'addMovementModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">إضافة حركة مخزون</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="addMovementForm">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="movementType" class="form-label">نوع الحركة <span class="text-danger">*</span></label>
                                <select class="form-select" id="movementType" required>
                                    <option value="">اختر نوع الحركة</option>
                                    <option value="in">إدخال</option>
                                    <option value="out">إخراج</option>
                                    <option value="adjustment">تسوية</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="movementProduct" class="form-label">المنتج <span class="text-danger">*</span></label>
                                <select class="form-select" id="movementProduct" required>
                                    <option value="">اختر المنتج</option>
                                    ${appData.products.map(p => `<option value="${p.id}">${p.name} (${p.code})</option>`).join('')}
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="movementWarehouse" class="form-label">المخزن <span class="text-danger">*</span></label>
                                <select class="form-select" id="movementWarehouse" required>
                                    <option value="">اختر المخزن</option>
                                    ${appData.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="movementQuantity" class="form-label">الكمية <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="movementQuantity" min="0" step="0.01" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="movementUnitPrice" class="form-label">سعر الوحدة</label>
                                <input type="number" class="form-control" id="movementUnitPrice" min="0" step="0.01">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="movementReference" class="form-label">المرجع</label>
                                <input type="text" class="form-control" id="movementReference">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="movementNotes" class="form-label">ملاحظات</label>
                            <textarea class="form-control" id="movementNotes" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-primary" onclick="saveInventoryMovement()">حفظ الحركة</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // إزالة النافذة عند الإغلاق
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

/**
 * حفظ حركة المخزون
 */
function saveInventoryMovement() {
    const movementType = document.getElementById('movementType').value;
    const productId = parseInt(document.getElementById('movementProduct').value);
    const warehouseId = parseInt(document.getElementById('movementWarehouse').value);
    const quantity = parseFloat(document.getElementById('movementQuantity').value);
    const unitPrice = parseFloat(document.getElementById('movementUnitPrice').value) || 0;
    const reference = document.getElementById('movementReference').value.trim();
    const notes = document.getElementById('movementNotes').value.trim();

    if (!movementType || !productId || !warehouseId || quantity <= 0) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    // التحقق من توفر الكمية في حالة الإخراج
    if (movementType === 'out') {
        const product = appData.products.find(p => p.id === productId);
        if (product && product.quantity < quantity) {
            alert(`الكمية المتاحة: ${product.quantity} ${product.unit}`);
            return;
        }
    }

    addInventoryMovement({
        productId: productId,
        warehouseId: warehouseId,
        movementType: movementType,
        quantity: quantity,
        unitPrice: unitPrice,
        reference: reference,
        notes: notes
    });

    saveData();

    // إغلاق النافذة
    const modal = bootstrap.Modal.getInstance(document.getElementById('addMovementModal'));
    modal.hide();

    alert('تم حفظ حركة المخزون بنجاح');
    showPage('inventory');
}

/**
 * إضافة مورد جديد
 */
function addSupplier(event) {
    event.preventDefault();

    const name = document.getElementById('supplierName').value.trim();
    const phone = document.getElementById('supplierPhone').value.trim();
    const email = document.getElementById('supplierEmail').value.trim();
    const taxNumber = document.getElementById('supplierTaxNumber').value.trim();
    const address = document.getElementById('supplierAddress').value.trim();
    const currency = document.getElementById('supplierCurrency')?.value || appData.settings.currency || 'SYP';

    if (!name) {
        alert('يرجى إدخال اسم المورد');
        return;
    }

    // التحقق من عدم تكرار الاسم
    if (appData.suppliers.some(s => s.name === name)) {
        alert('يوجد مورد بنفس الاسم مسبقاً');
        return;
    }

    const newSupplier = {
        id: Date.now(),
        name: name,
        phone: phone,
        email: email,
        address: address,
        taxNumber: taxNumber,
        currency: currency,
        currentBalance: 0,
        createdAt: new Date().toISOString().split('T')[0]
    };

    appData.suppliers.push(newSupplier);
    saveData();

    alert('تم إضافة المورد بنجاح');
    showPage('suppliers');
}

/**
 * إضافة مخزن جديد
 */
function addWarehouse() {
    const name = document.getElementById('warehouseName').value.trim();
    const location = document.getElementById('warehouseLocation').value.trim();
    const manager = document.getElementById('warehouseManager').value.trim();
    const phone = document.getElementById('warehousePhone').value.trim();

    if (!name) {
        alert('يرجى إدخال اسم المخزن');
        return;
    }

    // التحقق من عدم تكرار الاسم
    if (appData.warehouses.some(w => w.name === name)) {
        alert('يوجد مخزن بنفس الاسم مسبقاً');
        return;
    }

    const newWarehouse = {
        id: Date.now(),
        name: name,
        location: location,
        manager: manager,
        phone: phone,
        isActive: true,
        createdAt: new Date().toISOString().split('T')[0]
    };

    appData.warehouses.push(newWarehouse);
    saveData();

    // إغلاق النافذة المنبثقة
    const modal = bootstrap.Modal.getInstance(document.getElementById('addWarehouseModal'));
    modal.hide();

    // إعادة تحميل الصفحة
    showPage('warehouses');

    alert('تم إضافة المخزن بنجاح');
}

/**
 * عرض نافذة إضافة مخزن
 */
function showAddWarehouseModal() {
    const modal = new bootstrap.Modal(document.getElementById('addWarehouseModal'));
    modal.show();
}

/**
 * تحديث خيارات العميل/المورد في فاتورة
 */
function updateClientOptions() {
    const invoiceType = document.getElementById('invoiceType').value;
    const clientSelect = document.getElementById('clientSelect');
    const clientLabel = document.getElementById('clientLabel');

    // مسح الخيارات الحالية
    clientSelect.innerHTML = '<option value="">اختر العميل/المورد</option>';

    if (invoiceType === 'sale') {
        clientLabel.textContent = 'العميل';
        appData.customers.forEach(customer => {
            const option = document.createElement('option');
            option.value = customer.id;
            option.textContent = customer.name;
            clientSelect.appendChild(option);
        });
    } else if (invoiceType === 'purchase') {
        clientLabel.textContent = 'المورد';
        appData.suppliers.forEach(supplier => {
            const option = document.createElement('option');
            option.value = supplier.id;
            option.textContent = supplier.name;
            clientSelect.appendChild(option);
        });
    }

    // تحديث رقم الفاتورة
    updateInvoiceNumber();
}

/**
 * تحديث رقم الفاتورة
 */
function updateInvoiceNumber() {
    const invoiceType = document.getElementById('invoiceType').value;
    const invoiceNumber = document.getElementById('invoiceNumber');

    if (invoiceType) {
        const prefix = invoiceType === 'sale' ? 'SALE' : 'PUR';
        const year = new Date().getFullYear();
        const count = appData.invoices.filter(inv => inv.invoiceType === invoiceType).length + 1;
        invoiceNumber.value = `${prefix}-${year}-${count.toString().padStart(3, '0')}`;
    } else {
        invoiceNumber.value = '';
    }
}

/**
 * إضافة عنصر للفاتورة - نسخة محسنة ومتوافقة
 */
function addInvoiceItem() {
    console.log('➕ إضافة عنصر جديد للفاتورة...');

    const tableBody = document.getElementById('invoiceItemsTable');
    if (!tableBody) {
        console.error('❌ جدول عناصر الفاتورة غير موجود');
        alert('خطأ: جدول عناصر الفاتورة غير موجود');
        return;
    }

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <select class="form-select item-product" required onchange="updateItemPrice(this)">
                <option value="">اختر الصنف</option>
                ${appData.products.map(p => `<option value="${p.id}" data-price="${p.sellingPrice}">${p.name}</option>`).join('')}
            </select>
        </td>
        <td>
            <input type="number" class="form-control item-quantity" min="1" step="0.01" value="1" required onchange="calculateItemTotal(this)">
        </td>
        <td>
            <input type="number" class="form-control item-price" min="0" step="0.01" required onchange="calculateItemTotal(this)">
        </td>
        <td>
            <input type="number" class="form-control item-discount" min="0" max="100" step="0.01" value="0" onchange="calculateItemTotal(this)">
        </td>
        <td>
            <span class="item-total">0.00 ل.س</span>
        </td>
        <td>
            <button type="button" class="btn btn-sm btn-danger" onclick="removeInvoiceItem(this)">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;

    tableBody.appendChild(row);
    console.log('✅ تم إضافة عنصر جديد للفاتورة');
}

/**
 * حذف عنصر من الفاتورة
 */
function removeInvoiceItem(button) {
    const row = button.closest('tr');
    row.remove();
    calculateInvoiceTotals();
}

/**
 * تحديث سعر العنصر عند اختيار الصنف
 */
function updateItemPrice(select) {
    console.log('💰 تحديث سعر العنصر...');

    const selectedOption = select.options[select.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    const row = select.closest('tr');
    const priceInput = row.querySelector('.item-price');

    if (price && priceInput) {
        priceInput.value = price;
        console.log('✅ تم تحديث السعر:', price);
        calculateItemTotal(priceInput);
    }
}

/**
 * حساب إجمالي العنصر
 */
function calculateItemTotal(input) {
    console.log('🧮 حساب إجمالي العنصر...');

    const row = input.closest('tr');
    const quantity = parseFloat(row.querySelector('.item-quantity')?.value) || 0;
    const unitPrice = parseFloat(row.querySelector('.item-price')?.value) || 0;
    const discountPercent = parseFloat(row.querySelector('.item-discount')?.value) || 0;

    const subtotal = quantity * unitPrice;
    const discountAmount = subtotal * (discountPercent / 100);
    const total = subtotal - discountAmount;

    const totalElement = row.querySelector('.item-total');
    if (totalElement) {
        totalElement.textContent = `${total.toFixed(2)} ل.س`;
    }

    console.log('✅ تم حساب المجموع:', { quantity, unitPrice, discountPercent, total });
    calculateInvoiceTotals();
}

/**
 * حساب إجماليات الفاتورة
 */
function calculateInvoiceTotals() {
    console.log('💰 حساب إجماليات الفاتورة...');

    // جمع مجاميع العناصر
    const itemRows = document.querySelectorAll('#invoiceItemsTable tr');
    let subtotal = 0;

    itemRows.forEach(row => {
        const quantity = parseFloat(row.querySelector('.item-quantity')?.value) || 0;
        const unitPrice = parseFloat(row.querySelector('.item-price')?.value) || 0;
        const discountPercent = parseFloat(row.querySelector('.item-discount')?.value) || 0;

        const itemSubtotal = quantity * unitPrice;
        const itemDiscountAmount = itemSubtotal * (discountPercent / 100);
        const itemTotal = itemSubtotal - itemDiscountAmount;

        subtotal += itemTotal;
    });

    const discountPercent = parseFloat(document.getElementById('discountPercentage')?.value) || 0;
    const taxPercent = parseFloat(document.getElementById('taxPercentage')?.value) || 0;

    const discountAmount = subtotal * (discountPercent / 100);
    const taxableAmount = subtotal - discountAmount;
    const taxAmount = taxableAmount * (taxPercent / 100);
    const totalAmount = taxableAmount + taxAmount;

    // تحديث العرض
    const subtotalElement = document.getElementById('subtotalAmount');
    const discountAmountElement = document.getElementById('discountAmount');
    const taxAmountElement = document.getElementById('taxAmount');
    const totalAmountElement = document.getElementById('totalAmount');

    if (subtotalElement) subtotalElement.textContent = formatCurrency(subtotal);
    if (discountAmountElement) discountAmountElement.textContent = formatCurrency(discountAmount);
    if (taxAmountElement) taxAmountElement.textContent = formatCurrency(taxAmount);
    if (totalAmountElement) totalAmountElement.textContent = formatCurrency(totalAmount);

    console.log('✅ تم حساب الإجماليات:', { subtotal, discountAmount, taxAmount, totalAmount });
}

/**
 * تهيئة أحداث الصفحة
 */
function initializePageEvents() {
    // إعادة تهيئة التلميحات
    const tooltips = document.querySelectorAll('[title]');
    tooltips.forEach(element => {
        element.setAttribute('data-bs-toggle', 'tooltip');
        new bootstrap.Tooltip(element);
    });

    // تعيين التاريخ الحالي للحقول
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (!input.value && input.id.includes('Date') && !input.id.includes('due')) {
            input.value = today;
        }
    });
}

/**
 * وظائف مؤقتة للصفحات والعمليات
 */

// وظائف العملاء
function editCustomer(id) {
    alert('وظيفة تعديل العميل قيد التطوير');
}

function viewCustomerStatement(id) {
    showPage('customer-statement');
    // يمكن إضافة منطق لتحديد العميل تلقائياً
}

// وظائف الموردين
function editSupplier(id) {
    alert('وظيفة تعديل المورد قيد التطوير');
}

function viewSupplierStatement(id) {
    alert('وظيفة كشف حساب المورد قيد التطوير');
}

function deleteSupplier(id) {
    if (confirm('هل أنت متأكد من حذف هذا المورد؟')) {
        appData.suppliers = appData.suppliers.filter(s => s.id !== id);
        saveData();
        showPage('suppliers');
        alert('تم حذف المورد بنجاح');
    }
}

// وظائف الأصناف
function editProduct(id) {
    alert('وظيفة تعديل الصنف قيد التطوير');
}

function viewProductMovements(id) {
    showPage('inventory');
    // يمكن إضافة منطق لتصفية حركات الصنف
}

function deleteProduct(id) {
    if (confirm('هل أنت متأكد من حذف هذا الصنف؟')) {
        alert('وظيفة حذف الصنف قيد التطوير');
    }
}

// وظائف المخازن
function editWarehouse(id) {
    alert('وظيفة تعديل المخزن قيد التطوير');
}

function deleteWarehouse(id) {
    if (confirm('هل أنت متأكد من حذف هذا المخزن؟')) {
        const hasProducts = appData.products.some(p => p.warehouseId === id);
        if (hasProducts) {
            alert('لا يمكن حذف المخزن لوجود أصناف مرتبطة به');
            return;
        }
        appData.warehouses = appData.warehouses.filter(w => w.id !== id);
        saveData();
        showPage('warehouses');
        alert('تم حذف المخزن بنجاح');
    }
}

// وظائف الفواتير
function createInvoice(event) {
    if (event) {
        event.preventDefault();
    }
    console.log('🔄 محاولة حفظ الفاتورة كمؤكدة...');

    return saveInvoiceSimple('confirmed');
}

/**
 * حفظ الفاتورة - نسخة مبسطة وفعالة
 */
function saveInvoiceSimple(status = 'draft') {
    console.log('🚀 بدء حفظ الفاتورة المبسط...', { status });

    try {
        // جمع البيانات مباشرة
        const invoiceType = document.getElementById('invoiceType')?.value;
        const clientId = parseInt(document.getElementById('clientSelect')?.value);
        const invoiceDate = document.getElementById('invoiceDate')?.value;
        const dueDate = document.getElementById('dueDate')?.value || '';
        const notes = document.getElementById('invoiceNotes')?.value || '';

        console.log('📊 البيانات المجمعة:', { invoiceType, clientId, invoiceDate, dueDate, notes });

        // التحقق السريع
        if (!invoiceType) {
            alert('يرجى اختيار نوع الفاتورة');
            return false;
        }

        if (!clientId || isNaN(clientId)) {
            alert('يرجى اختيار ' + (invoiceType === 'sale' ? 'العميل' : 'المورد'));
            return false;
        }

        if (!invoiceDate) {
            alert('يرجى تحديد تاريخ الفاتورة');
            return false;
        }

        // جمع العناصر
        const items = [];
        const itemRows = document.querySelectorAll('#invoiceItemsTable tr');

        console.log('📦 عدد العناصر:', itemRows.length);

        if (itemRows.length === 0) {
            alert('يرجى إضافة عنصر واحد على الأقل للفاتورة');
            return false;
        }

        let hasValidItems = false;
        itemRows.forEach((row, index) => {
            const productSelect = row.querySelector('.item-product');
            const quantityInput = row.querySelector('.item-quantity');
            const priceInput = row.querySelector('.item-price');
            const discountInput = row.querySelector('.item-discount');

            console.log(`🔍 فحص الصف ${index + 1}:`, {
                productSelect: productSelect ? `موجود (${productSelect.value})` : 'مفقود',
                quantityInput: quantityInput ? `موجود (${quantityInput.value})` : 'مفقود',
                priceInput: priceInput ? `موجود (${priceInput.value})` : 'مفقود',
                discountInput: discountInput ? `موجود (${discountInput.value})` : 'مفقود'
            });

            if (productSelect && quantityInput && priceInput) {
                const productId = parseInt(productSelect.value);
                const quantity = parseFloat(quantityInput.value) || 0;
                const unitPrice = parseFloat(priceInput.value) || 0;
                const discount = parseFloat(discountInput?.value) || 0;

                console.log(`📊 قيم الصف ${index + 1}:`, { productId, quantity, unitPrice, discount });

                if (productId && !isNaN(productId) && quantity > 0 && unitPrice >= 0) {
                    const subtotal = quantity * unitPrice;
                    const discountAmount = subtotal * (discount / 100);
                    const totalAmount = subtotal - discountAmount;

                    items.push({
                        productId: productId,
                        quantity: quantity,
                        unitPrice: unitPrice,
                        discount: discount,
                        totalAmount: totalAmount
                    });
                    hasValidItems = true;
                    console.log(`✅ عنصر ${index + 1} مضاف بنجاح:`, { productId, quantity, unitPrice, discount, totalAmount });
                } else {
                    console.warn(`⚠️ عنصر غير صحيح في الصف ${index + 1}:`, { productId, quantity, unitPrice, discount });
                }
            } else {
                console.warn(`⚠️ عناصر مفقودة في الصف ${index + 1}`);
            }
        });

        if (!hasValidItems) {
            alert('يرجى إضافة عناصر صحيحة للفاتورة');
            return false;
        }

        // حساب الإجماليات
        const subtotal = items.reduce((sum, item) => sum + item.totalAmount, 0);
        const discountRate = parseFloat(document.getElementById('discountPercentage')?.value) || 0;
        const taxRate = parseFloat(document.getElementById('taxPercentage')?.value) || 0;

        const discountAmount = subtotal * (discountRate / 100);
        const taxAmount = (subtotal - discountAmount) * (taxRate / 100);
        const totalAmount = subtotal - discountAmount + taxAmount;

        console.log('💰 الإجماليات:', { subtotal, discountAmount, taxAmount, totalAmount });

        // إنشاء رقم الفاتورة
        const invoiceNumber = generateInvoiceNumber(invoiceType);
        console.log('🔢 رقم الفاتورة:', invoiceNumber);

        // إنشاء الفاتورة
        const newInvoice = {
            id: Date.now(),
            invoiceNumber: invoiceNumber,
            invoiceType: invoiceType,
            customerId: invoiceType === 'sale' ? clientId : null,
            supplierId: invoiceType === 'purchase' ? clientId : null,
            invoiceDate: invoiceDate,
            dueDate: dueDate,
            items: items,
            subtotal: subtotal,
            discountRate: discountRate,
            discountAmount: discountAmount,
            taxRate: taxRate,
            taxAmount: taxAmount,
            totalAmount: totalAmount,
            paidAmount: 0,
            remainingAmount: totalAmount,
            status: status,
            notes: notes,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        console.log('📄 الفاتورة الجديدة:', newInvoice);

        // تهيئة البيانات إذا لزم الأمر
        if (!appData.invoices) {
            appData.invoices = [];
        }
        if (!appData.settings.nextInvoiceNumber) {
            appData.settings.nextInvoiceNumber = { sale: 1, purchase: 1 };
        }

        // حفظ الفاتورة
        appData.invoices.push(newInvoice);
        appData.settings.nextInvoiceNumber[invoiceType]++;

        console.log('💾 حفظ البيانات...');
        saveData();

        // رسالة النجاح
        const currencySymbol = appData.settings.currencySymbol || 'ل.س';
        const successMessage = `✅ تم حفظ الفاتورة بنجاح!

📄 رقم الفاتورة: ${invoiceNumber}
💰 المبلغ الإجمالي: ${totalAmount.toFixed(2)} ${currencySymbol}
📊 عدد العناصر: ${items.length}
🏷️ الحالة: ${status === 'confirmed' ? 'مؤكدة' : 'مسودة'}

هل تريد طباعة الفاتورة؟`;

        console.log('🎉 تم حفظ الفاتورة بنجاح!');

        if (confirm(successMessage)) {
            // يمكن إضافة وظيفة الطباعة هنا
            alert('وظيفة الطباعة ستتم إضافتها لاحقاً');
        }

        // العودة لقائمة الفواتير
        showPage(invoiceType === 'sale' ? 'sales-invoices' : 'purchase-invoices');

        return true;

    } catch (error) {
        console.error('❌ خطأ في حفظ الفاتورة:', error);
        alert('حدث خطأ أثناء حفظ الفاتورة: ' + error.message);
        return false;
    }
}

/**
 * حل مشكلة حفظ الفواتير - وظيفة مباشرة
 */
function fixInvoiceSaving() {
    console.log('🔧 حل مشكلة حفظ الفواتير...');

    // التحقق من وجود البيانات الأساسية
    if (!appData.customers || appData.customers.length === 0 || !appData.products || appData.products.length === 0) {
        console.log('📝 إنشاء بيانات تجريبية...');
        createSampleData();

        // انتظار قليل ثم ملء النموذج
        setTimeout(() => {
            fillFormAutomatically();
        }, 500);
        return;
    }

    fillFormAutomatically();
}

/**
 * ملء النموذج تلقائياً للاختبار
 */
function fillFormAutomatically() {
    console.log('📝 ملء النموذج تلقائياً...');

    // التحقق من وجود العناصر في النموذج
    const invoiceType = document.getElementById('invoiceType');
    const clientSelect = document.getElementById('clientSelect');
    const invoiceDate = document.getElementById('invoiceDate');
    const itemsTable = document.getElementById('invoiceItemsTable');

    if (!invoiceType || !clientSelect || !invoiceDate || !itemsTable) {
        alert('يرجى الذهاب لصفحة إنشاء الفاتورة أولاً');
        showPage('create-invoice');
        return;
    }

    // ملء البيانات الأساسية
    if (!invoiceType.value) {
        invoiceType.value = 'sale';
        updateClientOptions();
        console.log('✅ تم تحديد نوع الفاتورة: مبيعات');
    }

    // انتظار قليل لتحديث قائمة العملاء
    setTimeout(() => {
        if (!clientSelect.value && appData.customers.length > 0) {
            clientSelect.value = appData.customers[0].id;
            console.log('✅ تم اختيار العميل:', appData.customers[0].name);
        }

        if (!invoiceDate.value) {
            invoiceDate.value = new Date().toISOString().split('T')[0];
            console.log('✅ تم تحديد التاريخ');
        }

        // إضافة عنصر تجريبي إذا لم توجد عناصر
        if (itemsTable.children.length === 0 && appData.products.length > 0) {
            addInvoiceItem();
            console.log('✅ تم إضافة عنصر جديد');

            // ملء العنصر الأول تلقائياً
            setTimeout(() => {
                const firstRow = itemsTable.querySelector('tr');
                if (firstRow) {
                    const productSelect = firstRow.querySelector('.item-product');
                    const quantityInput = firstRow.querySelector('.item-quantity');
                    const priceInput = firstRow.querySelector('.item-price');

                    console.log('🔍 عناصر الصف الأول:', {
                        productSelect: productSelect ? 'موجود' : 'مفقود',
                        quantityInput: quantityInput ? 'موجود' : 'مفقود',
                        priceInput: priceInput ? 'موجود' : 'مفقود'
                    });

                    if (productSelect && appData.products.length > 0) {
                        productSelect.value = appData.products[0].id;
                        console.log('✅ تم اختيار الصنف:', appData.products[0].name);

                        // تحديث السعر تلقائياً
                        if (priceInput) {
                            priceInput.value = appData.products[0].sellingPrice || 100;
                            console.log('✅ تم تحديد السعر:', priceInput.value);
                        }
                    }

                    if (quantityInput) {
                        quantityInput.value = 1;
                        console.log('✅ تم تحديد الكمية: 1');
                    }

                    // حساب المجموع
                    calculateInvoiceTotals();
                }
            }, 200);
        }

        console.log('✅ تم إعداد النموذج للاختبار');
        alert('تم إعداد النموذج تلقائياً!\n\n✅ نوع الفاتورة: مبيعات\n✅ العميل: ' + (appData.customers[0]?.name || 'غير محدد') + '\n✅ الصنف: ' + (appData.products[0]?.name || 'غير محدد') + '\n✅ الكمية: 1\n\nيمكنك الآن الضغط على "حفظ وتأكيد" لاختبار حفظ الفاتورة.');

    }, 300);
}

/**
 * حفظ الفاتورة كمسودة
 */
function saveInvoiceAsDraft() {
    console.log('🔄 محاولة حفظ الفاتورة كمسودة...');
    return saveInvoiceSimple('draft');
}

/**
 * حفظ الفاتورة
 */
function saveInvoice(status = 'draft') {
    console.log('🔄 بدء عملية حفظ الفاتورة...', { status });

    try {
        // التحقق من وجود العناصر
        console.log('🔍 التحقق من وجود عناصر النموذج...');

        const invoiceTypeElement = document.getElementById('invoiceType');
        const clientElement = document.getElementById('clientSelect');
        const dateElement = document.getElementById('invoiceDate');
        const dueDateElement = document.getElementById('dueDate');
        const notesElement = document.getElementById('invoiceNotes');

        console.log('📋 عناصر النموذج:', {
            invoiceType: invoiceTypeElement ? 'موجود' : 'مفقود',
            clientSelect: clientElement ? 'موجود' : 'مفقود',
            invoiceDate: dateElement ? 'موجود' : 'مفقود',
            dueDate: dueDateElement ? 'موجود' : 'مفقود',
            notes: notesElement ? 'موجود' : 'مفقود'
        });

        if (!invoiceTypeElement || !clientElement || !dateElement) {
            console.error('❌ عناصر النموذج غير موجودة');
            alert('خطأ: عناصر النموذج غير موجودة. يرجى إعادة تحميل الصفحة.');
            return false;
        }

        const invoiceType = invoiceTypeElement.value;
        const clientId = parseInt(clientElement.value);
        const invoiceDate = dateElement.value;
        const dueDate = dueDateElement ? dueDateElement.value : '';
        const notes = notesElement ? notesElement.value.trim() : '';

        console.log('📊 بيانات الفاتورة المستخرجة:', { invoiceType, clientId, invoiceDate, dueDate, notes });

        // التحقق من البيانات الأساسية
        if (!invoiceType) {
            alert('يرجى اختيار نوع الفاتورة');
            return false;
        }

        if (!clientId || isNaN(clientId)) {
            alert('يرجى اختيار ' + (invoiceType === 'sale' ? 'العميل' : 'المورد'));
            return false;
        }

        if (!invoiceDate) {
            alert('يرجى تحديد تاريخ الفاتورة');
            return false;
        }

        // جمع عناصر الفاتورة
        console.log('📦 جمع عناصر الفاتورة...');
        const items = [];
        const itemRows = document.querySelectorAll('#invoiceItemsTable tr');

        console.log('📊 عدد صفوف العناصر:', itemRows.length);
        console.log('🔍 جدول العناصر موجود:', document.getElementById('invoiceItemsTable') ? 'نعم' : 'لا');

        if (itemRows.length === 0) {
            console.warn('⚠️ لا توجد عناصر في الفاتورة');
            alert('يرجى إضافة عنصر واحد على الأقل للفاتورة\n\nاضغط على زر "إضافة صنف" لإضافة عناصر للفاتورة');
            return false;
        }

        let hasValidItems = false;
        itemRows.forEach((row, index) => {
            console.log(`🔍 فحص الصف ${index + 1}...`);

            const productSelect = row.querySelector('.item-product');
            const quantityInput = row.querySelector('.item-quantity');
            const priceInput = row.querySelector('.item-price');

            console.log(`📋 عناصر الصف ${index + 1}:`, {
                productSelect: productSelect ? `موجود (${productSelect.value})` : 'مفقود',
                quantityInput: quantityInput ? `موجود (${quantityInput.value})` : 'مفقود',
                priceInput: priceInput ? `موجود (${priceInput.value})` : 'مفقود'
            });

            if (productSelect && quantityInput && priceInput) {
                const productId = parseInt(productSelect.value);
                const quantity = parseFloat(quantityInput.value);
                const unitPrice = parseFloat(priceInput.value);

                console.log(`📊 قيم الصف ${index + 1}:`, { productId, quantity, unitPrice });

                if (productId && !isNaN(productId) && quantity > 0 && unitPrice >= 0) {
                    const discountInput = row.querySelector('.item-discount');
                    const discount = discountInput ? parseFloat(discountInput.value) || 0 : 0;
                    const subtotal = quantity * unitPrice;
                    const discountAmount = subtotal * (discount / 100);
                    const totalAmount = subtotal - discountAmount;

                    items.push({
                        productId: productId,
                        quantity: quantity,
                        unitPrice: unitPrice,
                        discount: discount,
                        totalAmount: totalAmount
                    });
                    hasValidItems = true;
                    console.log(`✅ عنصر صحيح مضاف:`, { productId, quantity, unitPrice, discount, totalAmount });
                } else {
                    console.warn(`⚠️ عنصر غير صحيح في الصف ${index + 1}:`, { productId, quantity, unitPrice });
                }
            } else {
                console.warn(`⚠️ عناصر مفقودة في الصف ${index + 1}`);
            }
        });

        if (!hasValidItems) {
            console.error('❌ لا توجد عناصر صحيحة في الفاتورة');
            alert('يرجى إضافة عناصر صحيحة للفاتورة:\n\n1. اختر الصنف\n2. أدخل الكمية (أكبر من 0)\n3. أدخل السعر (0 أو أكبر)');
            return false;
        }

        console.log('✅ العناصر المجمعة:', items);

        // التحقق من توفر الكمية في حالة فاتورة المبيعات
        if (invoiceType === 'sale' && status === 'confirmed') {
            for (let item of items) {
                const product = appData.products.find(p => p.id === item.productId);
                if (product && product.quantity < item.quantity) {
                    alert(`الكمية المتاحة من ${product.name}: ${product.quantity} ${product.unit}`);
                    return false;
                }
            }
        }

        // حساب الإجماليات
        console.log('💰 حساب الإجماليات...');
        const subtotal = items.reduce((sum, item) => sum + item.totalAmount, 0);
        const discountRateElement = document.getElementById('discountPercentage');
        const taxRateElement = document.getElementById('taxPercentage');

        const discountRate = discountRateElement ? parseFloat(discountRateElement.value) || 0 : 0;
        const discountAmount = subtotal * (discountRate / 100);
        const taxRate = taxRateElement ? parseFloat(taxRateElement.value) || 0 : appData.settings.taxRate || 0;
        const taxAmount = (subtotal - discountAmount) * (taxRate / 100);
        const totalAmount = subtotal - discountAmount + taxAmount;

        console.log('💰 الحسابات:', { subtotal, discountRate, discountAmount, taxRate, taxAmount, totalAmount });

        // إنشاء رقم الفاتورة
        console.log('🔢 إنشاء رقم الفاتورة...');
        const invoiceNumber = generateInvoiceNumber(invoiceType);
        console.log('✅ رقم الفاتورة المولد:', invoiceNumber);

        // التحقق من صحة الرقم
        if (!invoiceNumber) {
            console.error('❌ فشل في إنشاء رقم الفاتورة');
            alert('خطأ: فشل في إنشاء رقم الفاتورة. يرجى المحاولة مرة أخرى.');
            return false;
        }

        // إنشاء الفاتورة
        console.log('📄 إنشاء كائن الفاتورة...');
        const newInvoice = {
            id: Date.now(),
            invoiceNumber: invoiceNumber,
            invoiceType: invoiceType,
            customerId: invoiceType === 'sale' ? clientId : null,
            supplierId: invoiceType === 'purchase' ? clientId : null,
            invoiceDate: invoiceDate,
            dueDate: dueDate,
            items: items,
            subtotal: subtotal,
            discountRate: discountRate,
            discountAmount: discountAmount,
            taxRate: taxRate,
            taxAmount: taxAmount,
            totalAmount: totalAmount,
            paidAmount: 0,
            remainingAmount: totalAmount,
            status: status,
            notes: notes,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        console.log('📄 الفاتورة الجديدة:', newInvoice);

        // التحقق من صحة البيانات قبل الحفظ
        if (!newInvoice.id || !newInvoice.invoiceNumber || !newInvoice.invoiceType) {
            console.error('❌ بيانات الفاتورة غير مكتملة');
            alert('خطأ: بيانات الفاتورة غير مكتملة. يرجى المحاولة مرة أخرى.');
            return false;
        }

        // تهيئة مصفوفة الفواتير إذا لم تكن موجودة
        if (!appData.invoices) {
            appData.invoices = [];
            console.log('🔧 تم تهيئة مصفوفة الفواتير');
        }

        // حفظ الفاتورة
        console.log('💾 حفظ الفاتورة في المصفوفة...');
        appData.invoices.push(newInvoice);
        console.log('✅ تم إضافة الفاتورة للمصفوفة. العدد الحالي:', appData.invoices.length);

        // تحديث أرقام الفواتير
        console.log('🔢 تحديث أرقام الفواتير...');
        if (!appData.settings.nextInvoiceNumber) {
            appData.settings.nextInvoiceNumber = { sale: 1, purchase: 1 };
            console.log('🔧 تم تهيئة أرقام الفواتير');
        }
        appData.settings.nextInvoiceNumber[invoiceType]++;
        console.log('✅ تم تحديث رقم الفاتورة التالي:', appData.settings.nextInvoiceNumber);

    // إضافة قيد محاسبي (فقط للفواتير المؤكدة)
    if (status === 'confirmed') {
        addJournalEntry({
            date: invoiceDate,
            description: `فاتورة ${invoiceType === 'sale' ? 'مبيعات' : 'مشتريات'} رقم ${invoiceNumber}`,
            debitAccount: invoiceType === 'sale' ? 'العملاء' : 'المشتريات',
            creditAccount: invoiceType === 'sale' ? 'المبيعات' : 'الموردين',
            debitAmount: totalAmount,
            creditAmount: totalAmount,
            reference: invoiceNumber,
            invoiceId: newInvoice.id
        });

        // تحديث حركة المخزون (فقط للفواتير المؤكدة)
        items.forEach(item => {
            const product = appData.products.find(p => p.id === item.productId);
            if (product) {
                // تحديث كمية المنتج
                if (invoiceType === 'sale') {
                    product.quantity -= item.quantity;
                } else {
                    product.quantity += item.quantity;
                }

                addInventoryMovement({
                    productId: item.productId,
                    warehouseId: product.warehouseId,
                    movementType: invoiceType === 'sale' ? 'out' : 'in',
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    reference: invoiceNumber,
                    notes: `فاتورة ${invoiceType === 'sale' ? 'مبيعات' : 'مشتريات'} رقم ${invoiceNumber}`
                });
            }
        });
    }

        saveData();
        console.log('تم حفظ البيانات في localStorage');

        // حفظ البيانات في التخزين المحلي
        console.log('💾 حفظ البيانات في التخزين المحلي...');
        try {
            saveData();
            console.log('✅ تم حفظ البيانات بنجاح في localStorage');
        } catch (saveError) {
            console.error('❌ خطأ في حفظ البيانات:', saveError);
            alert('خطأ في حفظ البيانات: ' + saveError.message);
            return false;
        }

        // عرض رسالة نجاح مع خيارات
        const statusText = status === 'draft' ? 'كمسودة' : 'وتأكيدها';
        const currencySymbol = appData.settings.currencySymbol || 'ل.س';
        const successMessage = `✅ تم حفظ الفاتورة بنجاح!

📄 رقم الفاتورة: ${invoiceNumber}
💰 المبلغ الإجمالي: ${totalAmount.toFixed(2)} ${currencySymbol}
📊 عدد العناصر: ${items.length}
📅 التاريخ: ${invoiceDate}
🏷️ الحالة: ${status === 'confirmed' ? 'مؤكدة' : 'مسودة'}

هل تريد طباعة الفاتورة؟`;

        console.log('🎉 تم حفظ الفاتورة بنجاح:', newInvoice.id);

        if (confirm(successMessage)) {
            printInvoice(newInvoice.id);
        } else {
            showPage(invoiceType === 'sale' ? 'sales-invoices' : 'purchase-invoices');
        }

        return true;

    } catch (error) {
        console.error('❌ خطأ في حفظ الفاتورة:', error);
        console.error('❌ تفاصيل الخطأ:', error.stack);

        const errorMessage = `حدث خطأ أثناء حفظ الفاتورة:

${error.message}

يرجى التحقق من:
1. صحة البيانات المدخلة
2. وجود اتصال بالإنترنت
3. مساحة التخزين المتاحة

إذا استمرت المشكلة، يرجى الاتصال بالدعم الفني.`;

        alert(errorMessage);
        return false;
    }
}

/**
 * إنشاء رقم فاتورة جديد
 */
function generateInvoiceNumber(type) {
    const prefix = type === 'sale' ? 'SALE' : 'PUR';
    const nextNumber = appData.settings.nextInvoiceNumber[type] || 1;
    const year = new Date().getFullYear();
    return `${prefix}-${year}-${String(nextNumber).padStart(4, '0')}`;
}

/**
 * إضافة قيد محاسبي
 */
function addJournalEntry(entry) {
    if (!appData.journalEntries) {
        appData.journalEntries = [];
    }

    const newEntry = {
        id: Date.now(),
        date: entry.date,
        description: entry.description,
        debitAccount: entry.debitAccount,
        creditAccount: entry.creditAccount,
        debitAmount: entry.debitAmount,
        creditAmount: entry.creditAmount,
        reference: entry.reference,
        invoiceId: entry.invoiceId || null,
        paymentId: entry.paymentId || null,
        createdAt: new Date().toISOString()
    };

    appData.journalEntries.push(newEntry);
}

/**
 * إعداد حسابات تعديل الفاتورة
 */
function setupEditInvoiceCalculations() {
    const modal = document.getElementById('editInvoiceModal');

    // مستمعي الأحداث للحسابات
    modal.addEventListener('input', function(e) {
        if (e.target.classList.contains('item-quantity') ||
            e.target.classList.contains('item-price') ||
            e.target.id === 'editDiscountRate' ||
            e.target.id === 'editTaxRate') {
            calculateEditInvoiceTotals();
        }
    });

    modal.addEventListener('change', function(e) {
        if (e.target.classList.contains('item-product')) {
            const row = e.target.closest('tr');
            const productId = parseInt(e.target.value);
            const product = appData.products.find(p => p.id === productId);
            if (product) {
                const priceInput = row.querySelector('.item-price');
                priceInput.value = product.sellingPrice;
                calculateEditInvoiceTotals();
            }
        }
    });
}

/**
 * حساب إجماليات تعديل الفاتورة
 */
function calculateEditInvoiceTotals() {
    const rows = document.querySelectorAll('#editInvoiceItems tr');
    let subtotal = 0;

    rows.forEach(row => {
        const quantity = parseFloat(row.querySelector('.item-quantity').value) || 0;
        const price = parseFloat(row.querySelector('.item-price').value) || 0;
        const total = quantity * price;

        row.querySelector('.item-total').textContent = formatCurrency(total);
        subtotal += total;
    });

    const discountRate = parseFloat(document.getElementById('editDiscountRate').value) || 0;
    const taxRate = parseFloat(document.getElementById('editTaxRate').value) || 0;

    const discountAmount = subtotal * (discountRate / 100);
    const taxAmount = (subtotal - discountAmount) * (taxRate / 100);
    const totalAmount = subtotal - discountAmount + taxAmount;

    document.getElementById('editSubtotal').textContent = formatCurrency(subtotal);
    document.getElementById('editDiscountAmount').textContent = formatCurrency(discountAmount);
    document.getElementById('editTaxAmount').textContent = formatCurrency(taxAmount);
    document.getElementById('editTotalAmount').textContent = formatCurrency(totalAmount);
}

/**
 * إضافة عنصر جديد لتعديل الفاتورة
 */
function addEditInvoiceItem() {
    const tbody = document.getElementById('editInvoiceItems');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>
            <select class="form-select item-product" required>
                <option value="">اختر الصنف</option>
                ${appData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
            </select>
        </td>
        <td><input type="number" class="form-control item-quantity" value="1" min="0" step="0.01" required></td>
        <td><input type="number" class="form-control item-price" value="0" min="0" step="0.01" required></td>
        <td><span class="item-total">0.00 ل.س</span></td>
        <td>
            <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeEditInvoiceItem(this)">
                <i class="fas fa-trash"></i>
            </button>
        </td>
    `;
    tbody.appendChild(newRow);
}

/**
 * حذف عنصر من تعديل الفاتورة
 */
function removeEditInvoiceItem(button) {
    const row = button.closest('tr');
    row.remove();
    calculateEditInvoiceTotals();
}

/**
 * تحديث الفاتورة
 */
function updateInvoice(invoiceId) {
    const invoice = appData.invoices.find(inv => inv.id === invoiceId);
    if (!invoice) {
        alert('لم يتم العثور على الفاتورة');
        return;
    }

    const oldStatus = invoice.status;
    const clientId = parseInt(document.getElementById('editInvoiceClient').value);
    const invoiceDate = document.getElementById('editInvoiceDate').value;
    const dueDate = document.getElementById('editInvoiceDueDate').value;
    const status = document.getElementById('editInvoiceStatus').value;
    const notes = document.getElementById('editInvoiceNotes').value.trim();

    // جمع عناصر الفاتورة
    const items = [];
    const itemRows = document.querySelectorAll('#editInvoiceItems tr');

    itemRows.forEach(row => {
        const productId = parseInt(row.querySelector('.item-product').value);
        const quantity = parseFloat(row.querySelector('.item-quantity').value);
        const unitPrice = parseFloat(row.querySelector('.item-price').value);

        if (productId && quantity > 0 && unitPrice >= 0) {
            items.push({
                productId: productId,
                quantity: quantity,
                unitPrice: unitPrice,
                totalAmount: quantity * unitPrice
            });
        }
    });

    if (items.length === 0) {
        alert('يرجى إضافة عنصر واحد على الأقل للفاتورة');
        return;
    }

    // حساب الإجماليات
    const subtotal = items.reduce((sum, item) => sum + item.totalAmount, 0);
    const discountRate = parseFloat(document.getElementById('editDiscountRate').value) || 0;
    const discountAmount = subtotal * (discountRate / 100);
    const taxRate = parseFloat(document.getElementById('editTaxRate').value) || 0;
    const taxAmount = (subtotal - discountAmount) * (taxRate / 100);
    const totalAmount = subtotal - discountAmount + taxAmount;

    // إذا كانت الفاتورة مؤكدة سابقاً، نحتاج لعكس تأثيرها على المخزون
    if (oldStatus === 'confirmed') {
        invoice.items.forEach(item => {
            const product = appData.products.find(p => p.id === item.productId);
            if (product) {
                // عكس الحركة السابقة
                if (invoice.invoiceType === 'sale') {
                    product.quantity += item.quantity; // إرجاع الكمية
                } else {
                    product.quantity -= item.quantity; // إزالة الكمية
                }
            }
        });
    }

    // تحديث بيانات الفاتورة
    if (invoice.invoiceType === 'sale') {
        invoice.customerId = clientId;
        invoice.supplierId = null;
    } else {
        invoice.supplierId = clientId;
        invoice.customerId = null;
    }

    invoice.invoiceDate = invoiceDate;
    invoice.dueDate = dueDate;
    invoice.items = items;
    invoice.subtotal = subtotal;
    invoice.discountRate = discountRate;
    invoice.discountAmount = discountAmount;
    invoice.taxRate = taxRate;
    invoice.taxAmount = taxAmount;
    invoice.totalAmount = totalAmount;
    invoice.remainingAmount = totalAmount - (invoice.paidAmount || 0);
    invoice.status = status;
    invoice.notes = notes;
    invoice.updatedAt = new Date().toISOString();

    // إذا أصبحت الفاتورة مؤكدة، نطبق التأثير الجديد على المخزون
    if (status === 'confirmed') {
        items.forEach(item => {
            const product = appData.products.find(p => p.id === item.productId);
            if (product) {
                if (invoice.invoiceType === 'sale') {
                    if (product.quantity < item.quantity) {
                        alert(`الكمية المتاحة من ${product.name}: ${product.quantity} ${product.unit}`);
                        return;
                    }
                    product.quantity -= item.quantity;
                } else {
                    product.quantity += item.quantity;
                }

                // إضافة حركة مخزون جديدة
                addInventoryMovement({
                    productId: item.productId,
                    warehouseId: product.warehouseId,
                    movementType: invoice.invoiceType === 'sale' ? 'out' : 'in',
                    quantity: item.quantity,
                    unitPrice: item.unitPrice,
                    reference: invoice.invoiceNumber,
                    notes: `تعديل فاتورة ${invoice.invoiceType === 'sale' ? 'مبيعات' : 'مشتريات'} رقم ${invoice.invoiceNumber}`
                });
            }
        });
    }

    saveData();

    // إغلاق النافذة
    const modal = bootstrap.Modal.getInstance(document.getElementById('editInvoiceModal'));
    modal.hide();

    alert('تم تحديث الفاتورة بنجاح');

    // إعادة تحميل الصفحة الحالية
    const currentPage = invoice.invoiceType === 'sale' ? 'sales-invoices' : 'purchase-invoices';
    showPage(currentPage);
}

/**
 * إنشاء رقم سند جديد
 */
function generatePaymentNumber(type) {
    const prefix = type === 'receipt' ? 'REC' : 'PAY';
    const nextNumber = appData.settings.nextPaymentNumber[type] || 1;
    const year = new Date().getFullYear();
    return `${prefix}-${year}-${String(nextNumber).padStart(4, '0')}`;
}

function viewInvoice(id) {
    const invoice = appData.invoices.find(inv => inv.id === id);
    if (!invoice) {
        alert('لم يتم العثور على الفاتورة');
        return;
    }

    // عرض تفاصيل الفاتورة في نافذة منبثقة
    const client = invoice.customerId ?
        appData.customers.find(c => c.id === invoice.customerId) :
        appData.suppliers.find(s => s.id === invoice.supplierId);

    const itemsHtml = invoice.items.map(item => {
        const product = appData.products.find(p => p.id === item.productId);
        return `
            <tr>
                <td>${product ? product.name : 'منتج محذوف'}</td>
                <td>${item.quantity}</td>
                <td>${formatCurrency(item.unitPrice)}</td>
                <td>${formatCurrency(item.totalAmount)}</td>
            </tr>
        `;
    }).join('');

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'viewInvoiceModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">فاتورة ${invoice.invoiceType === 'sale' ? 'مبيعات' : 'مشتريات'} رقم ${invoice.invoiceNumber}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <strong>${invoice.invoiceType === 'sale' ? 'العميل' : 'المورد'}:</strong> ${client ? client.name : 'غير محدد'}
                        </div>
                        <div class="col-md-6">
                            <strong>التاريخ:</strong> ${invoice.invoiceDate}
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <strong>تاريخ الاستحقاق:</strong> ${invoice.dueDate || 'غير محدد'}
                        </div>
                        <div class="col-md-6">
                            <strong>الحالة:</strong> <span class="badge bg-${invoice.status === 'confirmed' ? 'success' : 'warning'}">${getStatusText(invoice.status)}</span>
                        </div>
                    </div>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>الصنف</th>
                                <th>الكمية</th>
                                <th>سعر الوحدة</th>
                                <th>المجموع</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                        </tbody>
                    </table>

                    <div class="row">
                        <div class="col-md-6 offset-md-6">
                            <table class="table">
                                <tr><td><strong>المجموع الفرعي:</strong></td><td>${formatCurrency(invoice.subtotal)}</td></tr>
                                <tr><td><strong>الخصم (${invoice.discountRate}%):</strong></td><td>${formatCurrency(invoice.discountAmount)}</td></tr>
                                <tr><td><strong>الضريبة (${invoice.taxRate}%):</strong></td><td>${formatCurrency(invoice.taxAmount)}</td></tr>
                                <tr class="table-primary"><td><strong>المجموع النهائي:</strong></td><td><strong>${formatCurrency(invoice.totalAmount)}</strong></td></tr>
                            </table>
                        </div>
                    </div>

                    ${invoice.notes ? `<div class="mt-3"><strong>ملاحظات:</strong> ${invoice.notes}</div>` : ''}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="printInvoice(${invoice.id})">
                        <i class="fas fa-print me-2"></i>طباعة
                    </button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // إزالة النافذة عند الإغلاق
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

function editInvoice(id) {
    const invoice = appData.invoices.find(inv => inv.id === id);
    if (!invoice) {
        alert('لم يتم العثور على الفاتورة');
        return;
    }

    // التحقق من إمكانية التعديل
    if (invoice.status === 'confirmed') {
        if (!confirm('هذه الفاتورة مؤكدة. التعديل سيؤثر على المخزون والحسابات. هل تريد المتابعة؟')) {
            return;
        }
    }

    // إنشاء نافذة تعديل الفاتورة
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'editInvoiceModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">تعديل فاتورة ${invoice.invoiceType === 'sale' ? 'مبيعات' : 'مشتريات'} رقم ${invoice.invoiceNumber}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="editInvoiceForm">
                        <div class="row">
                            <div class="col-md-4 mb-3">
                                <label for="editInvoiceType" class="form-label">نوع الفاتورة</label>
                                <select class="form-select" id="editInvoiceType" disabled>
                                    <option value="sale" ${invoice.invoiceType === 'sale' ? 'selected' : ''}>فاتورة مبيعات</option>
                                    <option value="purchase" ${invoice.invoiceType === 'purchase' ? 'selected' : ''}>فاتورة مشتريات</option>
                                </select>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="editInvoiceClient" class="form-label">${invoice.invoiceType === 'sale' ? 'العميل' : 'المورد'}</label>
                                <select class="form-select" id="editInvoiceClient" required>
                                    ${invoice.invoiceType === 'sale' ?
                                        appData.customers.map(c => `<option value="${c.id}" ${c.id === invoice.customerId ? 'selected' : ''}>${c.name}</option>`).join('') :
                                        appData.suppliers.map(s => `<option value="${s.id}" ${s.id === invoice.supplierId ? 'selected' : ''}>${s.name}</option>`).join('')
                                    }
                                </select>
                            </div>
                            <div class="col-md-4 mb-3">
                                <label for="editInvoiceDate" class="form-label">تاريخ الفاتورة</label>
                                <input type="date" class="form-control" id="editInvoiceDate" value="${invoice.invoiceDate}" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="editInvoiceDueDate" class="form-label">تاريخ الاستحقاق</label>
                                <input type="date" class="form-control" id="editInvoiceDueDate" value="${invoice.dueDate || ''}">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="editInvoiceStatus" class="form-label">حالة الفاتورة</label>
                                <select class="form-select" id="editInvoiceStatus">
                                    <option value="draft" ${invoice.status === 'draft' ? 'selected' : ''}>مسودة</option>
                                    <option value="confirmed" ${invoice.status === 'confirmed' ? 'selected' : ''}>مؤكدة</option>
                                </select>
                            </div>
                        </div>

                        <!-- عناصر الفاتورة -->
                        <div class="mb-3">
                            <div class="d-flex justify-content-between align-items-center mb-2">
                                <label class="form-label">عناصر الفاتورة</label>
                                <button type="button" class="btn btn-sm btn-outline-primary" onclick="addEditInvoiceItem()">
                                    <i class="fas fa-plus me-1"></i>إضافة عنصر
                                </button>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>الصنف</th>
                                            <th>الكمية</th>
                                            <th>سعر الوحدة</th>
                                            <th>المجموع</th>
                                            <th>إجراءات</th>
                                        </tr>
                                    </thead>
                                    <tbody id="editInvoiceItems">
                                        ${invoice.items.map((item, index) => {
                                            const product = appData.products.find(p => p.id === item.productId);
                                            return `
                                                <tr>
                                                    <td>
                                                        <select class="form-select item-product" required>
                                                            ${appData.products.map(p => `<option value="${p.id}" ${p.id === item.productId ? 'selected' : ''}>${p.name}</option>`).join('')}
                                                        </select>
                                                    </td>
                                                    <td><input type="number" class="form-control item-quantity" value="${item.quantity}" min="0" step="0.01" required></td>
                                                    <td><input type="number" class="form-control item-price" value="${item.unitPrice}" min="0" step="0.01" required></td>
                                                    <td><span class="item-total">${formatCurrency(item.totalAmount)}</span></td>
                                                    <td>
                                                        <button type="button" class="btn btn-sm btn-outline-danger" onclick="removeEditInvoiceItem(this)">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            `;
                                        }).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- الحسابات -->
                        <div class="row">
                            <div class="col-md-6 offset-md-6">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="row mb-2">
                                            <div class="col-6"><strong>المجموع الفرعي:</strong></div>
                                            <div class="col-6 text-end" id="editSubtotal">${formatCurrency(invoice.subtotal)}</div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-4">
                                                <label for="editDiscountRate" class="form-label">خصم (%):</label>
                                                <input type="number" class="form-control form-control-sm" id="editDiscountRate" value="${invoice.discountRate}" min="0" max="100" step="0.01">
                                            </div>
                                            <div class="col-8 text-end pt-4" id="editDiscountAmount">${formatCurrency(invoice.discountAmount)}</div>
                                        </div>
                                        <div class="row mb-2">
                                            <div class="col-4">
                                                <label for="editTaxRate" class="form-label">ضريبة (%):</label>
                                                <input type="number" class="form-control form-control-sm" id="editTaxRate" value="${invoice.taxRate}" min="0" max="100" step="0.01">
                                            </div>
                                            <div class="col-8 text-end pt-4" id="editTaxAmount">${formatCurrency(invoice.taxAmount)}</div>
                                        </div>
                                        <hr>
                                        <div class="row">
                                            <div class="col-6"><strong>المجموع النهائي:</strong></div>
                                            <div class="col-6 text-end"><strong id="editTotalAmount">${formatCurrency(invoice.totalAmount)}</strong></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="editInvoiceNotes" class="form-label">ملاحظات</label>
                            <textarea class="form-control" id="editInvoiceNotes" rows="3">${invoice.notes || ''}</textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-primary" onclick="updateInvoice(${invoice.id})">حفظ التعديلات</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // إضافة مستمعي الأحداث لحساب الإجماليات
    setupEditInvoiceCalculations();

    // إزالة النافذة عند الإغلاق
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

function printInvoice(id) {
    alert('وظيفة طباعة الفاتورة قيد التطوير');
}

// وظائف سندات القبض والدفع
function showAddReceiptModal() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'addReceiptModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">إضافة سند قبض جديد</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="addReceiptForm">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="receiptCustomer" class="form-label">العميل <span class="text-danger">*</span></label>
                                <select class="form-select" id="receiptCustomer" required>
                                    <option value="">اختر العميل</option>
                                    ${appData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="receiptDate" class="form-label">التاريخ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" id="receiptDate" value="${new Date().toISOString().split('T')[0]}" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="receiptAmount" class="form-label">المبلغ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="receiptAmount" min="0" step="0.01" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="receiptMethod" class="form-label">طريقة الدفع <span class="text-danger">*</span></label>
                                <select class="form-select" id="receiptMethod" required>
                                    <option value="">اختر طريقة الدفع</option>
                                    <option value="cash">نقدي</option>
                                    <option value="bank">تحويل بنكي</option>
                                    <option value="check">شيك</option>
                                    <option value="card">بطاقة ائتمان</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="receiptReference" class="form-label">رقم المرجع</label>
                                <input type="text" class="form-control" id="receiptReference">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="receiptBank" class="form-label">البنك</label>
                                <input type="text" class="form-control" id="receiptBank">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="receiptNotes" class="form-label">ملاحظات</label>
                            <textarea class="form-control" id="receiptNotes" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-primary" onclick="saveReceipt()">حفظ السند</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // إزالة النافذة عند الإغلاق
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

function saveReceipt() {
    const customerId = parseInt(document.getElementById('receiptCustomer').value);
    const date = document.getElementById('receiptDate').value;
    const amount = parseFloat(document.getElementById('receiptAmount').value);
    const method = document.getElementById('receiptMethod').value;
    const reference = document.getElementById('receiptReference').value.trim();
    const bank = document.getElementById('receiptBank').value.trim();
    const notes = document.getElementById('receiptNotes').value.trim();

    if (!customerId || !date || !amount || !method || amount <= 0) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    // إنشاء رقم السند
    const receiptNumber = generatePaymentNumber('receipt');

    const newReceipt = {
        id: Date.now(),
        paymentNumber: receiptNumber,
        paymentType: 'receipt',
        customerId: customerId,
        paymentDate: date,
        amount: amount,
        paymentMethod: method,
        referenceNumber: reference,
        bankName: bank,
        notes: notes,
        createdAt: new Date().toISOString()
    };

    appData.payments.push(newReceipt);
    appData.settings.nextPaymentNumber.receipt++;

    // إضافة قيد محاسبي
    addJournalEntry({
        date: date,
        description: `سند قبض رقم ${receiptNumber}`,
        debitAccount: method === 'cash' ? 'الصندوق' : 'البنك',
        creditAccount: 'العملاء',
        debitAmount: amount,
        creditAmount: amount,
        reference: receiptNumber,
        paymentId: newReceipt.id
    });

    saveData();

    // إغلاق النافذة
    const modal = bootstrap.Modal.getInstance(document.getElementById('addReceiptModal'));
    modal.hide();

    if (confirm(`تم حفظ سند القبض رقم ${receiptNumber} بنجاح!\n\nهل تريد طباعة السند؟`)) {
        printReceipt(newReceipt.id);
    } else {
        showPage('receipts');
    }
}

function showAddPaymentModal() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'addPaymentModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">إضافة سند دفع جديد</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="addPaymentForm">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="paymentSupplier" class="form-label">المورد <span class="text-danger">*</span></label>
                                <select class="form-select" id="paymentSupplier" required>
                                    <option value="">اختر المورد</option>
                                    ${appData.suppliers.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="paymentDate" class="form-label">التاريخ <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" id="paymentDate" value="${new Date().toISOString().split('T')[0]}" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="paymentAmount" class="form-label">المبلغ <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="paymentAmount" min="0" step="0.01" required>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="paymentMethod" class="form-label">طريقة الدفع <span class="text-danger">*</span></label>
                                <select class="form-select" id="paymentMethod" required>
                                    <option value="">اختر طريقة الدفع</option>
                                    <option value="cash">نقدي</option>
                                    <option value="bank">تحويل بنكي</option>
                                    <option value="check">شيك</option>
                                    <option value="card">بطاقة ائتمان</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="paymentReference" class="form-label">رقم المرجع</label>
                                <input type="text" class="form-control" id="paymentReference">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="paymentBank" class="form-label">البنك</label>
                                <input type="text" class="form-control" id="paymentBank">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="paymentNotes" class="form-label">ملاحظات</label>
                            <textarea class="form-control" id="paymentNotes" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-primary" onclick="savePayment()">حفظ السند</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // إزالة النافذة عند الإغلاق
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

function savePayment() {
    const supplierId = parseInt(document.getElementById('paymentSupplier').value);
    const date = document.getElementById('paymentDate').value;
    const amount = parseFloat(document.getElementById('paymentAmount').value);
    const method = document.getElementById('paymentMethod').value;
    const reference = document.getElementById('paymentReference').value.trim();
    const bank = document.getElementById('paymentBank').value.trim();
    const notes = document.getElementById('paymentNotes').value.trim();

    if (!supplierId || !date || !amount || !method || amount <= 0) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    // إنشاء رقم السند
    const paymentNumber = generatePaymentNumber('payment');

    const newPayment = {
        id: Date.now(),
        paymentNumber: paymentNumber,
        paymentType: 'payment',
        supplierId: supplierId,
        paymentDate: date,
        amount: amount,
        paymentMethod: method,
        referenceNumber: reference,
        bankName: bank,
        notes: notes,
        createdAt: new Date().toISOString()
    };

    appData.payments.push(newPayment);
    appData.settings.nextPaymentNumber.payment++;

    // إضافة قيد محاسبي
    addJournalEntry({
        date: date,
        description: `سند دفع رقم ${paymentNumber}`,
        debitAccount: 'الموردين',
        creditAccount: method === 'cash' ? 'الصندوق' : 'البنك',
        debitAmount: amount,
        creditAmount: amount,
        reference: paymentNumber,
        paymentId: newPayment.id
    });

    saveData();

    // إغلاق النافذة
    const modal = bootstrap.Modal.getInstance(document.getElementById('addPaymentModal'));
    modal.hide();

    if (confirm(`تم حفظ سند الدفع رقم ${paymentNumber} بنجاح!\n\nهل تريد طباعة السند؟`)) {
        printPayment(newPayment.id);
    } else {
        showPage('payments');
    }
}

// وظائف التقارير
function getJournalEntriesRows() {
    if (!appData.journalEntries || appData.journalEntries.length === 0) {
        return '<tr><td colspan="8" class="text-center text-muted">لا توجد قيود يومية</td></tr>';
    }

    let html = '';
    let totalDebit = 0;
    let totalCredit = 0;

    appData.journalEntries.forEach(entry => {
        totalDebit += entry.debitAmount;
        totalCredit += entry.creditAmount;

        const entryTypeText = {
            'invoice': 'فاتورة',
            'payment': 'دفعة',
            'adjustment': 'تسوية'
        };

        html += `
            <tr>
                <td>${entry.entryDate}</td>
                <td><span class="badge bg-primary">${entryTypeText[entry.entryType] || entry.entryType}</span></td>
                <td>${entry.description}</td>
                <td>${entry.debitAccount}</td>
                <td>${entry.creditAccount}</td>
                <td>${formatCurrency(entry.debitAmount)}</td>
                <td>${formatCurrency(entry.creditAmount)}</td>
                <td>${entry.referenceType === 'invoice' ? 'فاتورة' : 'سند'} #${entry.referenceId}</td>
            </tr>
        `;
    });

    // تحديث الإجماليات
    setTimeout(() => {
        const totalDebitElement = document.getElementById('totalDebit');
        const totalCreditElement = document.getElementById('totalCredit');
        if (totalDebitElement) totalDebitElement.textContent = formatCurrency(totalDebit);
        if (totalCreditElement) totalCreditElement.textContent = formatCurrency(totalCredit);
    }, 100);

    return html;
}

function getReceiptsRows(receipts) {
    if (receipts.length === 0) {
        return '<tr><td colspan="8" class="text-center text-muted">لا توجد سندات قبض</td></tr>';
    }

    let html = '';
    receipts.forEach(receipt => {
        const customer = appData.customers.find(c => c.id === receipt.customerId);
        const methodText = {
            'cash': 'نقدي',
            'bank': 'تحويل بنكي',
            'check': 'شيك',
            'card': 'بطاقة ائتمان'
        };

        html += `
            <tr>
                <td><strong>${receipt.paymentNumber}</strong></td>
                <td>${customer ? customer.name : '-'}</td>
                <td>${receipt.paymentDate}</td>
                <td>${formatCurrency(receipt.amount)}</td>
                <td><span class="badge bg-info">${methodText[receipt.paymentMethod] || receipt.paymentMethod}</span></td>
                <td>${receipt.referenceNumber || '-'}</td>
                <td><span class="badge bg-${receipt.status === 'confirmed' ? 'success' : 'warning'}">${receipt.status === 'confirmed' ? 'مؤكد' : 'معلق'}</span></td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewReceipt(${receipt.id})" title="عرض">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-success" onclick="printReceipt(${receipt.id})" title="طباعة">
                            <i class="fas fa-print"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="editReceipt(${receipt.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

function getPaymentsRows(payments) {
    if (payments.length === 0) {
        return '<tr><td colspan="8" class="text-center text-muted">لا توجد سندات دفع</td></tr>';
    }

    let html = '';
    payments.forEach(payment => {
        const supplier = appData.suppliers.find(s => s.id === payment.supplierId);
        const methodText = {
            'cash': 'نقدي',
            'bank': 'تحويل بنكي',
            'check': 'شيك',
            'card': 'بطاقة ائتمان'
        };

        html += `
            <tr>
                <td><strong>${payment.paymentNumber}</strong></td>
                <td>${supplier ? supplier.name : '-'}</td>
                <td>${payment.paymentDate}</td>
                <td>${formatCurrency(payment.amount)}</td>
                <td><span class="badge bg-info">${methodText[payment.paymentMethod] || payment.paymentMethod}</span></td>
                <td>${payment.referenceNumber || '-'}</td>
                <td><span class="badge bg-${payment.status === 'confirmed' ? 'success' : 'warning'}">${payment.status === 'confirmed' ? 'مؤكد' : 'معلق'}</span></td>
                <td>
                    <div class="btn-group" role="group">
                        <button class="btn btn-sm btn-outline-primary" onclick="viewPayment(${payment.id})" title="عرض">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-success" onclick="printPayment(${payment.id})" title="طباعة">
                            <i class="fas fa-print"></i>
                        </button>
                        <button class="btn btn-sm btn-outline-info" onclick="editPayment(${payment.id})" title="تعديل">
                            <i class="fas fa-edit"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    });

    return html;
}

function loadCustomerStatement() {
    const customerId = document.getElementById('statementCustomer').value;
    if (customerId) {
        document.getElementById('customerInfo').style.display = 'block';
        document.getElementById('noCustomerSelected').style.display = 'none';

        const customer = appData.customers.find(c => c.id == customerId);
        if (customer) {
            document.getElementById('customerName').textContent = customer.name;
            document.getElementById('customerAddress').textContent = customer.address || 'غير محدد';
            document.getElementById('customerPhone').textContent = customer.phone || 'غير محدد';
            document.getElementById('customerEmail').textContent = customer.email || 'غير محدد';
            document.getElementById('previousBalance').textContent = formatCurrency(0);
            document.getElementById('currentBalance').textContent = formatCurrency(customer.currentBalance);

            // تحميل بيانات كشف الحساب
            document.getElementById('statementTable').innerHTML =
                '<tr><td colspan="6" class="text-center text-muted">لا توجد حركات في هذه الفترة</td></tr>';
        }
    } else {
        document.getElementById('customerInfo').style.display = 'none';
        document.getElementById('noCustomerSelected').style.display = 'block';
    }
}

/**
 * تطبيق فلاتر حركة المخزون
 */
function applyInventoryMovementsFilter() {
    const typeFilter = document.getElementById('movementTypeFilter')?.value || '';
    const productFilter = document.getElementById('productFilter')?.value || '';
    const warehouseFilter = document.getElementById('warehouseFilter')?.value || '';
    const fromDate = document.getElementById('fromDate')?.value || '';
    const toDate = document.getElementById('toDate')?.value || '';
    const searchText = document.getElementById('movementSearch')?.value.toLowerCase() || '';

    let filteredMovements = appData.inventoryMovements || [];

    // تطبيق فلتر نوع الحركة
    if (typeFilter) {
        filteredMovements = filteredMovements.filter(movement => movement.movementType === typeFilter);
    }

    // تطبيق فلتر الصنف
    if (productFilter) {
        filteredMovements = filteredMovements.filter(movement => movement.productId == productFilter);
    }

    // تطبيق فلتر المخزن
    if (warehouseFilter) {
        filteredMovements = filteredMovements.filter(movement => movement.warehouseId == warehouseFilter);
    }

    // تطبيق فلتر التاريخ
    if (fromDate) {
        filteredMovements = filteredMovements.filter(movement => movement.date >= fromDate);
    }
    if (toDate) {
        filteredMovements = filteredMovements.filter(movement => movement.date <= toDate);
    }

    // تطبيق فلتر البحث النصي
    if (searchText) {
        filteredMovements = filteredMovements.filter(movement => {
            const reference = (movement.reference || '').toLowerCase();
            const notes = (movement.notes || '').toLowerCase();

            return reference.includes(searchText) || notes.includes(searchText);
        });
    }

    // تحديث الجدول
    updateInventoryMovementsTable(filteredMovements);
}

/**
 * مسح فلاتر حركة المخزون
 */
function clearInventoryMovementsFilter() {
    const typeFilter = document.getElementById('movementTypeFilter');
    const productFilter = document.getElementById('productFilter');
    const warehouseFilter = document.getElementById('warehouseFilter');
    const fromDate = document.getElementById('fromDate');
    const toDate = document.getElementById('toDate');
    const searchText = document.getElementById('movementSearch');

    if (typeFilter) typeFilter.value = '';
    if (productFilter) productFilter.value = '';
    if (warehouseFilter) warehouseFilter.value = '';
    if (fromDate) fromDate.value = '';
    if (toDate) toDate.value = '';
    if (searchText) searchText.value = '';

    // عرض جميع الحركات
    updateInventoryMovementsTable(appData.inventoryMovements || []);
}

/**
 * تحديث جدول حركة المخزون
 */
function updateInventoryMovementsTable(movements) {
    const tableContainer = document.querySelector('#inventoryMovementsTable') ||
                          document.querySelector('#main-content .table tbody');
    if (!tableContainer) return;

    if (movements.length > 0) {
        let totalIn = 0;
        let totalOut = 0;

        tableContainer.innerHTML = movements.map(movement => {
            const product = appData.products.find(p => p.id === movement.productId);
            const warehouse = appData.warehouses.find(w => w.id === movement.warehouseId);
            const totalAmount = movement.quantity * movement.unitPrice;

            if (movement.movementType === 'in') {
                totalIn += totalAmount;
            } else if (movement.movementType === 'out') {
                totalOut += totalAmount;
            }

            return `
                <tr>
                    <td>${movement.date}</td>
                    <td>
                        <span class="badge bg-${movement.movementType === 'in' ? 'success' : movement.movementType === 'out' ? 'danger' : 'warning'}">
                            ${getMovementTypeText(movement.movementType)}
                        </span>
                    </td>
                    <td>${product ? product.name : 'غير محدد'}</td>
                    <td>${warehouse ? warehouse.name : 'غير محدد'}</td>
                    <td>
                        <span class="badge bg-${movement.movementType === 'in' ? 'success' : 'danger'}">
                            ${movement.movementType === 'in' ? '+' : '-'}${movement.quantity} ${product ? product.unit : ''}
                        </span>
                    </td>
                    <td>${formatCurrency(movement.unitPrice)}</td>
                    <td>${formatCurrency(totalAmount)}</td>
                    <td>${movement.reference || '-'}</td>
                    <td>${movement.notes || '-'}</td>
                </tr>
            `;
        }).join('');

        // إضافة صف الإجماليات
        tableContainer.innerHTML += `
            <tr class="table-info">
                <td colspan="6"><strong>الإجماليات:</strong></td>
                <td><strong>إدخال: ${formatCurrency(totalIn)}</strong></td>
                <td><strong>إخراج: ${formatCurrency(totalOut)}</strong></td>
                <td><strong>الصافي: ${formatCurrency(totalIn - totalOut)}</strong></td>
            </tr>
        `;

    } else {
        tableContainer.innerHTML = `
            <tr>
                <td colspan="9" class="text-center text-muted py-4">
                    <i class="fas fa-exchange-alt fa-3x mb-3"></i>
                    <h5>لا توجد حركات مخزون تطابق معايير البحث</h5>
                    <p>جرب تغيير الفلاتر أو مسحها</p>
                    <button class="btn btn-primary" onclick="clearInventoryMovementsFilter()">
                        <i class="fas fa-times me-2"></i>مسح الفلاتر
                    </button>
                </td>
            </tr>
        `;
    }
}

/**
 * الحصول على نص نوع الحركة
 */
function getMovementTypeText(type) {
    const types = {
        'in': 'إدخال',
        'out': 'إخراج',
        'transfer': 'تحويل',
        'adjustment': 'تسوية'
    };
    return types[type] || type;
}
function filterReceipts() { alert('وظيفة تصفية سندات القبض قيد التطوير'); }
function clearReceiptFilters() { alert('وظيفة مسح فلاتر سندات القبض قيد التطوير'); }
function filterPayments() { alert('وظيفة تصفية سندات الدفع قيد التطوير'); }
function clearPaymentFilters() { alert('وظيفة مسح فلاتر سندات الدفع قيد التطوير'); }
function filterJournalEntries() { alert('وظيفة تصفية دفتر اليومية قيد التطوير'); }
function clearJournalFilters() { alert('وظيفة مسح فلاتر دفتر اليومية قيد التطوير'); }

// وظائف التقارير
function generateSalesReport() {
    const fromDate = document.getElementById('salesReportFromDate')?.value;
    const toDate = document.getElementById('salesReportToDate')?.value;
    const customerId = document.getElementById('salesReportCustomer')?.value;
    const productId = document.getElementById('salesReportProduct')?.value;

    if (!fromDate || !toDate) {
        alert('يرجى تحديد الفترة الزمنية');
        return;
    }

    if (fromDate > toDate) {
        alert('تاريخ البداية يجب أن يكون قبل تاريخ النهاية');
        return;
    }

    // تصفية الفواتير
    let salesInvoices = appData.invoices.filter(inv =>
        inv.invoiceType === 'sale' &&
        inv.status === 'confirmed' &&
        inv.invoiceDate >= fromDate &&
        inv.invoiceDate <= toDate
    );

    // تصفية حسب العميل
    if (customerId) {
        salesInvoices = salesInvoices.filter(inv => inv.customerId == customerId);
    }

    // تصفية حسب المنتج
    if (productId) {
        salesInvoices = salesInvoices.filter(inv =>
            inv.items && inv.items.some(item => item.productId == productId)
        );
    }

    // حساب الإحصائيات
    const totalSales = salesInvoices.reduce((sum, inv) => sum + (inv.totalAmount || 0), 0);
    const totalInvoices = salesInvoices.length;
    const averageInvoice = totalInvoices > 0 ? totalSales / totalInvoices : 0;
    const pendingAmount = salesInvoices.reduce((sum, inv) => sum + (inv.remainingAmount || inv.totalAmount || 0), 0);

    // تحديث الإحصائيات
    const totalSalesElement = document.getElementById('totalSalesAmount');
    const totalInvoicesElement = document.getElementById('totalSalesInvoicesCount');
    const averageElement = document.getElementById('averageInvoiceAmount');
    const pendingElement = document.getElementById('pendingSalesAmount');

    if (totalSalesElement) totalSalesElement.textContent = formatCurrency(totalSales);
    if (totalInvoicesElement) totalInvoicesElement.textContent = totalInvoices;
    if (averageElement) averageElement.textContent = formatCurrency(averageInvoice);
    if (pendingElement) pendingElement.textContent = formatCurrency(pendingAmount);

    // تحديث الجدول
    const tableBody = document.getElementById('salesReportTable');
    if (tableBody) {
        if (salesInvoices.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">لا توجد مبيعات في هذه الفترة</td></tr>';
        } else {
            tableBody.innerHTML = salesInvoices.map(invoice => {
                const customer = appData.customers.find(c => c.id === invoice.customerId);
                return `
                    <tr>
                        <td><strong>${invoice.invoiceNumber || 'غير محدد'}</strong></td>
                        <td>${invoice.invoiceDate || 'غير محدد'}</td>
                        <td>${customer ? customer.name : 'غير محدد'}</td>
                        <td>${formatCurrency(invoice.totalAmount || 0)}</td>
                        <td>${formatCurrency(invoice.paidAmount || 0)}</td>
                        <td>${formatCurrency(invoice.remainingAmount || invoice.totalAmount || 0)}</td>
                        <td><span class="badge bg-${getStatusColor(invoice.status)}">${getStatusText(invoice.status)}</span></td>
                    </tr>
                `;
            }).join('');
        }
    }

    // إظهار النتائج
    const summaryElement = document.getElementById('salesReportSummary');
    const noDataElement = document.getElementById('noSalesData');

    if (summaryElement) {
        summaryElement.style.display = 'block';
    }
    if (noDataElement) {
        noDataElement.style.display = 'none';
    }

    // إضافة رسالة نجاح
    console.log(`تم إنشاء تقرير المبيعات: ${totalInvoices} فاتورة، إجمالي ${formatCurrency(totalSales)}`);
}

function clearSalesReportFilters() {
    document.getElementById('salesReportFromDate').value = '';
    document.getElementById('salesReportToDate').value = '';
    document.getElementById('salesReportCustomer').value = '';
    document.getElementById('salesReportProduct').value = '';

    document.getElementById('salesReportSummary').style.display = 'none';
    document.getElementById('noSalesData').style.display = 'block';
}

function generatePurchaseReport() {
    const fromDate = document.getElementById('purchaseReportFromDate').value;
    const toDate = document.getElementById('purchaseReportToDate').value;
    const supplierId = document.getElementById('purchaseReportSupplier').value;
    const productId = document.getElementById('purchaseReportProduct').value;

    if (!fromDate || !toDate) {
        alert('يرجى تحديد الفترة الزمنية');
        return;
    }

    // تصفية الفواتير
    let purchaseInvoices = appData.invoices.filter(inv =>
        inv.invoiceType === 'purchase' &&
        inv.status === 'confirmed' &&
        inv.invoiceDate >= fromDate &&
        inv.invoiceDate <= toDate
    );

    // تصفية حسب المورد
    if (supplierId) {
        purchaseInvoices = purchaseInvoices.filter(inv => inv.supplierId == supplierId);
    }

    // تصفية حسب المنتج
    if (productId) {
        purchaseInvoices = purchaseInvoices.filter(inv =>
            inv.items.some(item => item.productId == productId)
        );
    }

    // حساب الإحصائيات
    const totalPurchases = purchaseInvoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
    const totalInvoices = purchaseInvoices.length;
    const averageInvoice = totalInvoices > 0 ? totalPurchases / totalInvoices : 0;
    const pendingAmount = purchaseInvoices.reduce((sum, inv) => sum + inv.remainingAmount, 0);

    // تحديث الإحصائيات
    document.getElementById('totalPurchaseAmount').textContent = formatCurrency(totalPurchases);
    document.getElementById('totalPurchaseInvoicesCount').textContent = totalInvoices;
    document.getElementById('averagePurchaseAmount').textContent = formatCurrency(averageInvoice);
    document.getElementById('pendingPurchaseAmount').textContent = formatCurrency(pendingAmount);

    // تحديث الجدول
    const tableBody = document.getElementById('purchaseReportTable');
    if (tableBody) {
        if (purchaseInvoices.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">لا توجد مشتريات في هذه الفترة</td></tr>';
        } else {
            tableBody.innerHTML = purchaseInvoices.map(invoice => {
                const supplier = appData.suppliers.find(s => s.id === invoice.supplierId);
                return `
                    <tr>
                        <td><strong>${invoice.invoiceNumber}</strong></td>
                        <td>${invoice.invoiceDate}</td>
                        <td>${supplier ? supplier.name : 'غير محدد'}</td>
                        <td>${formatCurrency(invoice.totalAmount)}</td>
                        <td>${formatCurrency(invoice.paidAmount || 0)}</td>
                        <td>${formatCurrency(invoice.remainingAmount || invoice.totalAmount)}</td>
                        <td><span class="badge bg-${getStatusColor(invoice.status)}">${getStatusText(invoice.status)}</span></td>
                    </tr>
                `;
            }).join('');
        }
    }

    // إظهار النتائج
    const summaryElement = document.getElementById('purchaseReportSummary');
    const noDataElement = document.getElementById('noPurchaseData');

    if (summaryElement) {
        summaryElement.style.display = 'block';
    }
    if (noDataElement) {
        noDataElement.style.display = 'none';
    }
}

function clearPurchaseReportFilters() {
    document.getElementById('purchaseReportFromDate').value = '';
    document.getElementById('purchaseReportToDate').value = '';
    document.getElementById('purchaseReportSupplier').value = '';
    document.getElementById('purchaseReportProduct').value = '';

    document.getElementById('purchaseReportSummary').style.display = 'none';
    document.getElementById('noPurchaseData').style.display = 'block';
}

// وظائف التصدير والطباعة
function exportJournal(format) {
    printContent('journal', 'دفتر اليومية العامة');
}

function exportStatement(format) {
    printContent('customer-statement', 'كشف حساب العميل');
}

function exportSalesReport(format) {
    if (format === 'print') {
        printSalesReport();
    } else {
        printContent('sales-report', 'تقرير المبيعات');
    }
}

function exportPurchaseReport(format) {
    if (format === 'print') {
        printPurchaseReport();
    } else {
        printContent('purchase-report', 'تقرير المشتريات');
    }
}

/**
 * طباعة تقرير المبيعات
 */
function printSalesReport() {
    const fromDate = document.getElementById('salesReportFromDate')?.value;
    const toDate = document.getElementById('salesReportToDate')?.value;
    const customerId = document.getElementById('salesReportCustomer')?.value;
    const productId = document.getElementById('salesReportProduct')?.value;

    if (!fromDate || !toDate) {
        alert('يرجى إنشاء التقرير أولاً');
        return;
    }

    // تصفية الفواتير
    let salesInvoices = appData.invoices.filter(inv =>
        inv.invoiceType === 'sale' &&
        inv.status === 'confirmed' &&
        inv.invoiceDate >= fromDate &&
        inv.invoiceDate <= toDate
    );

    // تطبيق الفلاتر
    if (customerId) {
        salesInvoices = salesInvoices.filter(inv => inv.customerId == customerId);
    }
    if (productId) {
        salesInvoices = salesInvoices.filter(inv =>
            inv.items.some(item => item.productId == productId)
        );
    }

    // حساب الإحصائيات
    const totalSales = salesInvoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
    const totalInvoices = salesInvoices.length;
    const averageInvoice = totalInvoices > 0 ? totalSales / totalInvoices : 0;
    const pendingAmount = salesInvoices.reduce((sum, inv) => sum + inv.remainingAmount, 0);

    // إنشاء HTML للطباعة
    const printContent = generateSalesReportPrintHTML(salesInvoices, {
        fromDate,
        toDate,
        totalSales,
        totalInvoices,
        averageInvoice,
        pendingAmount,
        customerId,
        productId
    });

    printDocument(printContent, 'تقرير المبيعات');
}

/**
 * طباعة تقرير المشتريات
 */
function printPurchaseReport() {
    const fromDate = document.getElementById('purchaseReportFromDate')?.value;
    const toDate = document.getElementById('purchaseReportToDate')?.value;
    const supplierId = document.getElementById('purchaseReportSupplier')?.value;
    const productId = document.getElementById('purchaseReportProduct')?.value;

    if (!fromDate || !toDate) {
        alert('يرجى إنشاء التقرير أولاً');
        return;
    }

    // تصفية الفواتير
    let purchaseInvoices = appData.invoices.filter(inv =>
        inv.invoiceType === 'purchase' &&
        inv.status === 'confirmed' &&
        inv.invoiceDate >= fromDate &&
        inv.invoiceDate <= toDate
    );

    // تطبيق الفلاتر
    if (supplierId) {
        purchaseInvoices = purchaseInvoices.filter(inv => inv.supplierId == supplierId);
    }
    if (productId) {
        purchaseInvoices = purchaseInvoices.filter(inv =>
            inv.items.some(item => item.productId == productId)
        );
    }

    // حساب الإحصائيات
    const totalPurchases = purchaseInvoices.reduce((sum, inv) => sum + inv.totalAmount, 0);
    const totalInvoices = purchaseInvoices.length;
    const averageInvoice = totalInvoices > 0 ? totalPurchases / totalInvoices : 0;
    const pendingAmount = purchaseInvoices.reduce((sum, inv) => sum + inv.remainingAmount, 0);

    // إنشاء HTML للطباعة
    const printContent = generatePurchaseReportPrintHTML(purchaseInvoices, {
        fromDate,
        toDate,
        totalPurchases,
        totalInvoices,
        averageInvoice,
        pendingAmount,
        supplierId,
        productId
    });

    printDocument(printContent, 'تقرير المشتريات');
}

function printStatement() {
    printContent('customer-statement', 'كشف حساب العميل');
}

function printInvoice(id) {
    const invoice = appData.invoices.find(inv => inv.id === id);
    if (!invoice) {
        alert('لم يتم العثور على الفاتورة');
        return;
    }

    const customer = appData.customers.find(c => c.id === invoice.customerId);
    const supplier = appData.suppliers.find(s => s.id === invoice.supplierId);
    const client = customer || supplier;

    const printContent = generateInvoicePrintHTML(invoice, client);
    printDocument(printContent, `فاتورة رقم ${invoice.invoiceNumber}`);
}

function printReceipt(id) {
    const receipt = appData.payments.find(p => p.id === id && p.paymentType === 'receipt');
    if (!receipt) {
        alert('لم يتم العثور على سند القبض');
        return;
    }

    const customer = appData.customers.find(c => c.id === receipt.customerId);
    const printContent = generateReceiptPrintHTML(receipt, customer);
    printDocument(printContent, `سند قبض رقم ${receipt.paymentNumber}`);
}

function printPayment(id) {
    const payment = appData.payments.find(p => p.id === id && p.paymentType === 'payment');
    if (!payment) {
        alert('لم يتم العثور على سند الدفع');
        return;
    }

    const supplier = appData.suppliers.find(s => s.id === payment.supplierId);
    const printContent = generatePaymentPrintHTML(payment, supplier);
    printDocument(printContent, `سند دفع رقم ${payment.paymentNumber}`);
}

/**
 * طباعة محتوى عام
 */
function printContent(pageType, title) {
    const content = document.getElementById('main-content').innerHTML;
    const printContent = generatePrintHTML(content, title);
    printDocument(printContent, title);
}

/**
 * إنشاء HTML للطباعة
 */
function generatePrintHTML(content, title) {
    const settings = appData.settings;
    const logoHtml = settings.logoUrl ? `<img src="${settings.logoUrl}" alt="شعار الشركة" style="max-height: 80px;">` : '';

    return `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 20px;
                    direction: rtl;
                    font-size: 14px;
                }
                .header {
                    text-align: center;
                    border-bottom: 2px solid #333;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .company-info {
                    margin-bottom: 20px;
                }
                .logo {
                    margin-bottom: 10px;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }
                th, td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: right;
                }
                th {
                    background-color: #f5f5f5;
                    font-weight: bold;
                }
                .footer {
                    margin-top: 50px;
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                }
                @media print {
                    body { margin: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${logoHtml}</div>
                <div class="company-info">
                    <h2>${settings.companyName || 'شركة SAM PRO'}</h2>
                    ${settings.companyAddress ? `<p>${settings.companyAddress}</p>` : ''}
                    ${settings.companyPhone ? `<p>هاتف: ${settings.companyPhone}</p>` : ''}
                    ${settings.companyEmail ? `<p>بريد إلكتروني: ${settings.companyEmail}</p>` : ''}
                </div>
                <h3>${title}</h3>
            </div>

            <div class="content">
                ${content}
            </div>

            <div class="footer">
                <p>تاريخ الطباعة: ${new Date().toLocaleString('ar-SY')}</p>
                <p>تطوير: MOHANNAD AHMAD - هاتف: +963-998-171-954</p>
            </div>
        </body>
        </html>
    `;
}

/**
 * إنشاء HTML لطباعة الفاتورة
 */
function generateInvoicePrintHTML(invoice, client) {
    const settings = appData.settings;
    const logoHtml = settings.logoUrl ? `<img src="${settings.logoUrl}" alt="شعار الشركة" style="max-height: 80px;">` : '';

    const itemsHtml = invoice.items ? invoice.items.map(item => {
        const product = appData.products.find(p => p.id === item.productId);
        return `
            <tr>
                <td>${product ? product.name : 'منتج محذوف'}</td>
                <td>${item.quantity}</td>
                <td>${formatCurrency(item.unitPrice)}</td>
                <td>${formatCurrency(item.totalAmount)}</td>
            </tr>
        `;
    }).join('') : '';

    return `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>فاتورة رقم ${invoice.invoiceNumber}</title>
            <style>
                body { font-family: 'Arial', sans-serif; margin: 20px; direction: rtl; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .invoice-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
                .client-info { width: 48%; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f5f5f5; font-weight: bold; }
                .totals { margin-top: 20px; text-align: left; }
                .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${logoHtml}</div>
                <h2>${settings.companyName || 'شركة SAM PRO'}</h2>
                <h3>فاتورة ${invoice.invoiceType === 'sale' ? 'مبيعات' : 'مشتريات'}</h3>
            </div>

            <div class="invoice-info">
                <div class="client-info">
                    <h4>${invoice.invoiceType === 'sale' ? 'بيانات العميل' : 'بيانات المورد'}</h4>
                    <p><strong>الاسم:</strong> ${client ? client.name : 'غير محدد'}</p>
                    <p><strong>الهاتف:</strong> ${client ? client.phone || 'غير محدد' : 'غير محدد'}</p>
                    <p><strong>العنوان:</strong> ${client ? client.address || 'غير محدد' : 'غير محدد'}</p>
                </div>
                <div class="invoice-details">
                    <p><strong>رقم الفاتورة:</strong> ${invoice.invoiceNumber}</p>
                    <p><strong>التاريخ:</strong> ${invoice.invoiceDate}</p>
                    <p><strong>الحالة:</strong> ${getStatusText(invoice.status)}</p>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>الصنف</th>
                        <th>الكمية</th>
                        <th>سعر الوحدة</th>
                        <th>المجموع</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHtml}
                </tbody>
            </table>

            <div class="totals">
                <p><strong>المجموع الفرعي:</strong> ${formatCurrency(invoice.subtotal)}</p>
                <p><strong>الخصم:</strong> ${formatCurrency(invoice.discountAmount)}</p>
                <p><strong>الضريبة:</strong> ${formatCurrency(invoice.taxAmount)}</p>
                <h3><strong>المجموع النهائي:</strong> ${formatCurrency(invoice.totalAmount)}</h3>
                <p><strong>المدفوع:</strong> ${formatCurrency(invoice.paidAmount)}</p>
                <p><strong>المتبقي:</strong> ${formatCurrency(invoice.remainingAmount)}</p>
            </div>

            <div class="footer">
                <p>تاريخ الطباعة: ${new Date().toLocaleString('ar-SY')}</p>
                <p>تطوير: MOHANNAD AHMAD - هاتف: +963-998-171-954</p>
            </div>
        </body>
        </html>
    `;
}

/**
 * إنشاء HTML لطباعة سند القبض
 */
function generateReceiptPrintHTML(receipt, customer) {
    const settings = appData.settings;
    const logoHtml = settings.logoUrl ? `<img src="${settings.logoUrl}" alt="شعار الشركة" style="max-height: 80px;">` : '';

    const methodText = {
        'cash': 'نقدي',
        'bank': 'تحويل بنكي',
        'check': 'شيك',
        'card': 'بطاقة ائتمان'
    };

    return `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>سند قبض رقم ${receipt.paymentNumber}</title>
            <style>
                body { font-family: 'Arial', sans-serif; margin: 20px; direction: rtl; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .receipt-info { margin-bottom: 30px; }
                .amount-box { border: 2px solid #333; padding: 20px; text-align: center; margin: 20px 0; }
                .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
                .signature-area { margin-top: 50px; display: flex; justify-content: space-between; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${logoHtml}</div>
                <h2>${settings.companyName || 'شركة SAM PRO'}</h2>
                <h3>سند قبض</h3>
            </div>

            <div class="receipt-info">
                <p><strong>رقم السند:</strong> ${receipt.paymentNumber}</p>
                <p><strong>التاريخ:</strong> ${receipt.paymentDate}</p>
                <p><strong>العميل:</strong> ${customer ? customer.name : 'غير محدد'}</p>
                <p><strong>طريقة الدفع:</strong> ${methodText[receipt.paymentMethod] || receipt.paymentMethod}</p>
                ${receipt.referenceNumber ? `<p><strong>رقم المرجع:</strong> ${receipt.referenceNumber}</p>` : ''}
                ${receipt.bankName ? `<p><strong>البنك:</strong> ${receipt.bankName}</p>` : ''}
            </div>

            <div class="amount-box">
                <h2>المبلغ المقبوض: ${formatCurrency(receipt.amount)}</h2>
            </div>

            ${receipt.notes ? `<p><strong>ملاحظات:</strong> ${receipt.notes}</p>` : ''}

            <div class="signature-area">
                <div>
                    <p>توقيع المحاسب</p>
                    <p>_________________</p>
                </div>
                <div>
                    <p>توقيع العميل</p>
                    <p>_________________</p>
                </div>
            </div>

            <div class="footer">
                <p>تاريخ الطباعة: ${new Date().toLocaleString('ar-SY')}</p>
                <p>تطوير: MOHANNAD AHMAD - هاتف: +963-998-171-954</p>
            </div>
        </body>
        </html>
    `;
}

/**
 * إنشاء HTML لطباعة سند الدفع
 */
function generatePaymentPrintHTML(payment, supplier) {
    const settings = appData.settings;
    const logoHtml = settings.logoUrl ? `<img src="${settings.logoUrl}" alt="شعار الشركة" style="max-height: 80px;">` : '';

    const methodText = {
        'cash': 'نقدي',
        'bank': 'تحويل بنكي',
        'check': 'شيك',
        'card': 'بطاقة ائتمان'
    };

    return `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>سند دفع رقم ${payment.paymentNumber}</title>
            <style>
                body { font-family: 'Arial', sans-serif; margin: 20px; direction: rtl; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .payment-info { margin-bottom: 30px; }
                .amount-box { border: 2px solid #333; padding: 20px; text-align: center; margin: 20px 0; }
                .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
                .signature-area { margin-top: 50px; display: flex; justify-content: space-between; }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${logoHtml}</div>
                <h2>${settings.companyName || 'شركة SAM PRO'}</h2>
                <h3>سند دفع</h3>
            </div>

            <div class="payment-info">
                <p><strong>رقم السند:</strong> ${payment.paymentNumber}</p>
                <p><strong>التاريخ:</strong> ${payment.paymentDate}</p>
                <p><strong>المورد:</strong> ${supplier ? supplier.name : 'غير محدد'}</p>
                <p><strong>طريقة الدفع:</strong> ${methodText[payment.paymentMethod] || payment.paymentMethod}</p>
                ${payment.referenceNumber ? `<p><strong>رقم المرجع:</strong> ${payment.referenceNumber}</p>` : ''}
                ${payment.bankName ? `<p><strong>البنك:</strong> ${payment.bankName}</p>` : ''}
            </div>

            <div class="amount-box">
                <h2>المبلغ المدفوع: ${formatCurrency(payment.amount)}</h2>
            </div>

            ${payment.notes ? `<p><strong>ملاحظات:</strong> ${payment.notes}</p>` : ''}

            <div class="signature-area">
                <div>
                    <p>توقيع المحاسب</p>
                    <p>_________________</p>
                </div>
                <div>
                    <p>توقيع المورد</p>
                    <p>_________________</p>
                </div>
            </div>

            <div class="footer">
                <p>تاريخ الطباعة: ${new Date().toLocaleString('ar-SY')}</p>
                <p>تطوير: MOHANNAD AHMAD - هاتف: +963-998-171-954</p>
            </div>
        </body>
        </html>
    `;
}

/**
 * إنشاء HTML لطباعة تقرير المبيعات
 */
function generateSalesReportPrintHTML(invoices, stats) {
    const settings = appData.settings;
    const logoHtml = settings.logoUrl ? `<img src="${settings.logoUrl}" alt="شعار الشركة" style="max-height: 80px;">` : '';

    const customerFilter = stats.customerId ? appData.customers.find(c => c.id == stats.customerId) : null;
    const productFilter = stats.productId ? appData.products.find(p => p.id == stats.productId) : null;

    const invoicesHtml = invoices.map(invoice => {
        const customer = appData.customers.find(c => c.id === invoice.customerId);
        return `
            <tr>
                <td>${invoice.invoiceNumber}</td>
                <td>${invoice.invoiceDate}</td>
                <td>${customer ? customer.name : 'غير محدد'}</td>
                <td>${formatCurrency(invoice.totalAmount)}</td>
                <td>${formatCurrency(invoice.paidAmount)}</td>
                <td>${formatCurrency(invoice.remainingAmount)}</td>
                <td>${getStatusText(invoice.status)}</td>
            </tr>
        `;
    }).join('');

    return `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير المبيعات</title>
            <style>
                body { font-family: 'Arial', sans-serif; margin: 20px; direction: rtl; font-size: 14px; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .logo { margin-bottom: 10px; }
                .company-info { margin-bottom: 20px; }
                .report-info { margin-bottom: 30px; background: #f8f9fa; padding: 15px; border-radius: 5px; }
                .stats { display: flex; justify-content: space-around; margin: 20px 0; }
                .stat-box { text-align: center; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f5f5f5; font-weight: bold; }
                .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
                @media print { body { margin: 0; } .no-print { display: none; } }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${logoHtml}</div>
                <div class="company-info">
                    <h2>${settings.companyName || 'شركة SAM PRO'}</h2>
                    ${settings.companyAddress ? `<p>${settings.companyAddress}</p>` : ''}
                    ${settings.companyPhone ? `<p>هاتف: ${settings.companyPhone}</p>` : ''}
                </div>
                <h3>تقرير المبيعات</h3>
            </div>

            <div class="report-info">
                <h4>معلومات التقرير</h4>
                <p><strong>الفترة:</strong> من ${stats.fromDate} إلى ${stats.toDate}</p>
                ${customerFilter ? `<p><strong>العميل:</strong> ${customerFilter.name}</p>` : ''}
                ${productFilter ? `<p><strong>المنتج:</strong> ${productFilter.name}</p>` : ''}
                <p><strong>تاريخ الإنشاء:</strong> ${new Date().toLocaleString('ar-SY')}</p>
            </div>

            <div class="stats">
                <div class="stat-box">
                    <h4>${formatCurrency(stats.totalSales)}</h4>
                    <p>إجمالي المبيعات</p>
                </div>
                <div class="stat-box">
                    <h4>${stats.totalInvoices}</h4>
                    <p>عدد الفواتير</p>
                </div>
                <div class="stat-box">
                    <h4>${formatCurrency(stats.averageInvoice)}</h4>
                    <p>متوسط الفاتورة</p>
                </div>
                <div class="stat-box">
                    <h4>${formatCurrency(stats.pendingAmount)}</h4>
                    <p>المبالغ المعلقة</p>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>رقم الفاتورة</th>
                        <th>التاريخ</th>
                        <th>العميل</th>
                        <th>المجموع</th>
                        <th>المدفوع</th>
                        <th>المتبقي</th>
                        <th>الحالة</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoicesHtml}
                </tbody>
            </table>

            <div class="footer">
                <p>تاريخ الطباعة: ${new Date().toLocaleString('ar-SY')}</p>
                <p>تطوير: MOHANNAD AHMAD - هاتف: +963-998-171-954</p>
            </div>
        </body>
        </html>
    `;
}

/**
 * إنشاء HTML لطباعة تقرير المشتريات
 */
function generatePurchaseReportPrintHTML(invoices, stats) {
    const settings = appData.settings;
    const logoHtml = settings.logoUrl ? `<img src="${settings.logoUrl}" alt="شعار الشركة" style="max-height: 80px;">` : '';

    const supplierFilter = stats.supplierId ? appData.suppliers.find(s => s.id == stats.supplierId) : null;
    const productFilter = stats.productId ? appData.products.find(p => p.id == stats.productId) : null;

    const invoicesHtml = invoices.map(invoice => {
        const supplier = appData.suppliers.find(s => s.id === invoice.supplierId);
        return `
            <tr>
                <td>${invoice.invoiceNumber}</td>
                <td>${invoice.invoiceDate}</td>
                <td>${supplier ? supplier.name : 'غير محدد'}</td>
                <td>${formatCurrency(invoice.totalAmount)}</td>
                <td>${formatCurrency(invoice.paidAmount)}</td>
                <td>${formatCurrency(invoice.remainingAmount)}</td>
                <td>${getStatusText(invoice.status)}</td>
            </tr>
        `;
    }).join('');

    return `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
        <head>
            <meta charset="UTF-8">
            <title>تقرير المشتريات</title>
            <style>
                body { font-family: 'Arial', sans-serif; margin: 20px; direction: rtl; font-size: 14px; }
                .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                .logo { margin-bottom: 10px; }
                .company-info { margin-bottom: 20px; }
                .report-info { margin-bottom: 30px; background: #f8f9fa; padding: 15px; border-radius: 5px; }
                .stats { display: flex; justify-content: space-around; margin: 20px 0; }
                .stat-box { text-align: center; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: right; }
                th { background-color: #f5f5f5; font-weight: bold; }
                .footer { margin-top: 50px; text-align: center; font-size: 12px; color: #666; }
                @media print { body { margin: 0; } .no-print { display: none; } }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">${logoHtml}</div>
                <div class="company-info">
                    <h2>${settings.companyName || 'شركة SAM PRO'}</h2>
                    ${settings.companyAddress ? `<p>${settings.companyAddress}</p>` : ''}
                    ${settings.companyPhone ? `<p>هاتف: ${settings.companyPhone}</p>` : ''}
                </div>
                <h3>تقرير المشتريات</h3>
            </div>

            <div class="report-info">
                <h4>معلومات التقرير</h4>
                <p><strong>الفترة:</strong> من ${stats.fromDate} إلى ${stats.toDate}</p>
                ${supplierFilter ? `<p><strong>المورد:</strong> ${supplierFilter.name}</p>` : ''}
                ${productFilter ? `<p><strong>المنتج:</strong> ${productFilter.name}</p>` : ''}
                <p><strong>تاريخ الإنشاء:</strong> ${new Date().toLocaleString('ar-SY')}</p>
            </div>

            <div class="stats">
                <div class="stat-box">
                    <h4>${formatCurrency(stats.totalPurchases)}</h4>
                    <p>إجمالي المشتريات</p>
                </div>
                <div class="stat-box">
                    <h4>${stats.totalInvoices}</h4>
                    <p>عدد الفواتير</p>
                </div>
                <div class="stat-box">
                    <h4>${formatCurrency(stats.averageInvoice)}</h4>
                    <p>متوسط الفاتورة</p>
                </div>
                <div class="stat-box">
                    <h4>${formatCurrency(stats.pendingAmount)}</h4>
                    <p>المبالغ المعلقة</p>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>رقم الفاتورة</th>
                        <th>التاريخ</th>
                        <th>المورد</th>
                        <th>المجموع</th>
                        <th>المدفوع</th>
                        <th>المتبقي</th>
                        <th>الحالة</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoicesHtml}
                </tbody>
            </table>

            <div class="footer">
                <p>تاريخ الطباعة: ${new Date().toLocaleString('ar-SY')}</p>
                <p>تطوير: MOHANNAD AHMAD - هاتف: +963-998-171-954</p>
            </div>
        </body>
        </html>
    `;
}

/**
 * طباعة المستند
 */
function printDocument(htmlContent, title) {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

// وظائف السندات الإضافية
function viewReceipt(id) {
    const receipt = appData.payments.find(p => p.id === id && p.paymentType === 'receipt');
    if (!receipt) {
        alert('لم يتم العثور على سند القبض');
        return;
    }

    const customer = appData.customers.find(c => c.id === receipt.customerId);
    const methodText = {
        'cash': 'نقدي',
        'bank': 'تحويل بنكي',
        'check': 'شيك',
        'card': 'بطاقة ائتمان'
    };

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'viewReceiptModal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">سند قبض رقم ${receipt.paymentNumber}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col-md-6"><strong>العميل:</strong> ${customer ? customer.name : 'غير محدد'}</div>
                        <div class="col-md-6"><strong>التاريخ:</strong> ${receipt.paymentDate}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6"><strong>المبلغ:</strong> ${formatCurrency(receipt.amount)}</div>
                        <div class="col-md-6"><strong>طريقة الدفع:</strong> ${methodText[receipt.paymentMethod] || receipt.paymentMethod}</div>
                    </div>
                    ${receipt.referenceNumber ? `<div class="row mb-3"><div class="col-12"><strong>رقم المرجع:</strong> ${receipt.referenceNumber}</div></div>` : ''}
                    ${receipt.bankName ? `<div class="row mb-3"><div class="col-12"><strong>البنك:</strong> ${receipt.bankName}</div></div>` : ''}
                    ${receipt.notes ? `<div class="row mb-3"><div class="col-12"><strong>ملاحظات:</strong> ${receipt.notes}</div></div>` : ''}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="printReceipt(${receipt.id})">
                        <i class="fas fa-print me-2"></i>طباعة
                    </button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

function editReceipt(id) {
    alert('وظيفة تعديل سند القبض قيد التطوير');
}

function viewPayment(id) {
    const payment = appData.payments.find(p => p.id === id && p.paymentType === 'payment');
    if (!payment) {
        alert('لم يتم العثور على سند الدفع');
        return;
    }

    const supplier = appData.suppliers.find(s => s.id === payment.supplierId);
    const methodText = {
        'cash': 'نقدي',
        'bank': 'تحويل بنكي',
        'check': 'شيك',
        'card': 'بطاقة ائتمان'
    };

    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'viewPaymentModal';
    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">سند دفع رقم ${payment.paymentNumber}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row mb-3">
                        <div class="col-md-6"><strong>المورد:</strong> ${supplier ? supplier.name : 'غير محدد'}</div>
                        <div class="col-md-6"><strong>التاريخ:</strong> ${payment.paymentDate}</div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-6"><strong>المبلغ:</strong> ${formatCurrency(payment.amount)}</div>
                        <div class="col-md-6"><strong>طريقة الدفع:</strong> ${methodText[payment.paymentMethod] || payment.paymentMethod}</div>
                    </div>
                    ${payment.referenceNumber ? `<div class="row mb-3"><div class="col-12"><strong>رقم المرجع:</strong> ${payment.referenceNumber}</div></div>` : ''}
                    ${payment.bankName ? `<div class="row mb-3"><div class="col-12"><strong>البنك:</strong> ${payment.bankName}</div></div>` : ''}
                    ${payment.notes ? `<div class="row mb-3"><div class="col-12"><strong>ملاحظات:</strong> ${payment.notes}</div></div>` : ''}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="printPayment(${payment.id})">
                        <i class="fas fa-print me-2"></i>طباعة
                    </button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

function editPayment(id) {
    alert('وظيفة تعديل سند الدفع قيد التطوير');
}

/**
 * تسجيل الدخول
 */
function login(event) {
    event.preventDefault();

    const password = document.getElementById('loginPassword').value;
    const correctPassword = appData.settings.password || '123';

    if (password === correctPassword) {
        localStorage.setItem('samProLoggedIn', 'true');
        showPage('dashboard');
        alert('تم تسجيل الدخول بنجاح');
    } else {
        alert('كلمة المرور غير صحيحة');
    }
}

/**
 * تسجيل الخروج
 */
function logout() {
    if (confirm('هل أنت متأكد من تسجيل الخروج؟')) {
        localStorage.removeItem('samProLoggedIn');
        showPage('login');
    }
}

/**
 * التحقق من تسجيل الدخول
 */
function checkLogin() {
    const isLoggedIn = localStorage.getItem('samProLoggedIn');
    if (!isLoggedIn) {
        showPage('login');
        return false;
    }
    return true;
}

/**
 * الحصول على رمز العملة
 */
function getCurrencySymbol(currencyCode) {
    const currencies = {
        'SYP': 'ل.س',
        'USD': '$',
        'EUR': '€',
        'SAR': 'ر.س',
        'AED': 'د.إ',
        'EGP': 'ج.م',
        'JOD': 'د.أ',
        'LBP': 'ل.ل'
    };
    return currencies[currencyCode] || 'ل.س';
}

/**
 * حفظ إعدادات الشركة
 */
function saveCompanySettings(event) {
    event.preventDefault();

    console.log('💾 حفظ إعدادات الشركة...');

    // حفظ البيانات الأساسية
    appData.settings.companyName = document.getElementById('companyName').value;
    appData.settings.companyAddress = document.getElementById('companyAddress').value;
    appData.settings.companyPhone = document.getElementById('companyPhone').value;
    appData.settings.companyEmail = document.getElementById('companyEmail').value;
    appData.settings.taxNumber = document.getElementById('taxNumber').value;
    appData.settings.currency = document.getElementById('currency').value;
    appData.settings.currencySymbol = getCurrencySymbol(document.getElementById('currency').value);
    appData.settings.taxRate = parseFloat(document.getElementById('taxRate').value) || 0;

    // حفظ إعدادات العملات المتعددة
    const enableMultiCurrencyElement = document.getElementById('enableMultiCurrency');
    if (enableMultiCurrencyElement) {
        appData.settings.enableMultiCurrency = enableMultiCurrencyElement.checked;
        console.log('💱 العملات المتعددة:', appData.settings.enableMultiCurrency ? 'مفعلة' : 'معطلة');
    }

    // حفظ أسعار الصرف إذا كانت العملات المتعددة مفعلة
    if (appData.settings.enableMultiCurrency) {
        if (!appData.settings.exchangeRates) {
            appData.settings.exchangeRates = {};
        }

        const currencies = ['USD', 'EUR', 'SAR', 'AED', 'EGP', 'JOD', 'LBP', 'TRY', 'GBP'];
        const baseCurrency = appData.settings.currency || 'SYP';

        currencies.forEach(currency => {
            if (currency !== baseCurrency) {
                const rateInput = document.getElementById(`rate_${currency}`);
                if (rateInput) {
                    const rate = parseFloat(rateInput.value) || 1;
                    appData.settings.exchangeRates[currency] = rate;
                    console.log(`💱 سعر صرف ${currency}: ${rate}`);
                }
            }
        });
    }

    saveData();
    console.log('✅ تم حفظ إعدادات الشركة بنجاح');
    alert('تم حفظ إعدادات الشركة بنجاح');

    // إعادة تحميل الصفحة لتطبيق التغييرات
    setTimeout(() => {
        showPage('settings');
    }, 500);
}

/**
 * حفظ إعدادات النظام
 */
function saveSystemSettings(event) {
    event.preventDefault();

    appData.settings.password = document.getElementById('systemPassword').value;
    appData.settings.autoBackup = document.getElementById('autoBackup').value;

    saveData();
    alert('تم حفظ إعدادات النظام بنجاح');
}

/**
 * حفظ إعدادات الطباعة
 */
function savePrintSettings(event) {
    event.preventDefault();
    console.log('💾 حفظ إعدادات الطباعة...');

    // تهيئة إعدادات الطباعة إذا لم توجد
    if (!appData.settings.printSettings) {
        appData.settings.printSettings = {};
    }

    // حفظ إعدادات العرض
    appData.settings.printSettings.showAppName = document.getElementById('showAppName').checked;
    appData.settings.printSettings.showCompanyLogo = document.getElementById('showCompanyLogo').checked;
    appData.settings.printSettings.showPrintDate = document.getElementById('showPrintDate').checked;
    appData.settings.printSettings.showPageNumbers = document.getElementById('showPageNumbers').checked;

    // حفظ النصوص المخصصة
    appData.settings.printSettings.headerText = document.getElementById('printHeaderText').value.trim();
    appData.settings.printSettings.footerText = document.getElementById('printFooterText').value.trim();

    // حفظ إعدادات الصفحة
    appData.settings.printSettings.orientation = document.getElementById('printOrientation').value;
    appData.settings.printSettings.pageSize = document.getElementById('printPageSize').value;

    saveData();
    console.log('✅ تم حفظ إعدادات الطباعة:', appData.settings.printSettings);
    alert('تم حفظ إعدادات الطباعة بنجاح');
}

/**
 * معاينة إعدادات الطباعة
 */
function previewPrintSettings() {
    console.log('👁️ معاينة إعدادات الطباعة...');

    // جمع الإعدادات الحالية
    const settings = {
        showAppName: document.getElementById('showAppName').checked,
        showCompanyLogo: document.getElementById('showCompanyLogo').checked,
        showPrintDate: document.getElementById('showPrintDate').checked,
        showPageNumbers: document.getElementById('showPageNumbers').checked,
        headerText: document.getElementById('printHeaderText').value.trim(),
        footerText: document.getElementById('printFooterText').value.trim(),
        orientation: document.getElementById('printOrientation').value,
        pageSize: document.getElementById('printPageSize').value
    };

    // إنشاء نافذة معاينة
    const previewWindow = window.open('', '_blank', 'width=800,height=600');
    previewWindow.document.write(generatePrintPreview(settings));
    previewWindow.document.close();
}

/**
 * إنشاء معاينة الطباعة
 */
function generatePrintPreview(settings) {
    const currentDate = new Date().toLocaleDateString('ar-SY');
    const companyName = appData.settings.companyName || 'اسم الشركة';
    const logoUrl = appData.settings.logoUrl || '';

    return `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>معاينة إعدادات الطباعة</title>
            <style>
                @page {
                    size: ${settings.pageSize} ${settings.orientation};
                    margin: 2cm;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    direction: rtl;
                    text-align: right;
                    margin: 0;
                    padding: 20px;
                    background: #f8f9fa;
                }

                .preview-container {
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    max-width: 800px;
                    margin: 0 auto;
                }

                .print-header {
                    text-align: center;
                    border-bottom: 2px solid #007bff;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }

                .company-logo {
                    max-height: 80px;
                    margin-bottom: 10px;
                }

                .company-name {
                    font-size: 24px;
                    font-weight: bold;
                    color: #333;
                    margin: 10px 0;
                }

                .header-text {
                    font-size: 18px;
                    color: #666;
                    margin: 10px 0;
                }

                .print-date {
                    font-size: 14px;
                    color: #888;
                    margin-top: 10px;
                }

                .content-area {
                    min-height: 400px;
                    padding: 20px 0;
                    border: 2px dashed #ddd;
                    text-align: center;
                    color: #666;
                    font-size: 18px;
                }

                .print-footer {
                    text-align: center;
                    border-top: 1px solid #ddd;
                    padding-top: 20px;
                    margin-top: 30px;
                    font-size: 14px;
                    color: #666;
                }

                .app-name {
                    font-weight: bold;
                    color: #007bff;
                }

                .page-number {
                    position: fixed;
                    bottom: 20px;
                    left: 20px;
                    font-size: 12px;
                    color: #888;
                }

                .settings-info {
                    background: #e3f2fd;
                    padding: 15px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    font-size: 14px;
                }

                .settings-info h4 {
                    margin: 0 0 10px 0;
                    color: #1976d2;
                }

                .setting-item {
                    margin: 5px 0;
                }

                .enabled {
                    color: #4caf50;
                    font-weight: bold;
                }

                .disabled {
                    color: #f44336;
                }

                @media print {
                    body {
                        background: white;
                    }
                    .preview-container {
                        box-shadow: none;
                        border: none;
                    }
                    .settings-info {
                        display: none;
                    }
                }
            </style>
        </head>
        <body>
            <div class="preview-container">
                <!-- معلومات الإعدادات -->
                <div class="settings-info">
                    <h4>إعدادات الطباعة الحالية:</h4>
                    <div class="setting-item">اسم التطبيق: <span class="${settings.showAppName ? 'enabled' : 'disabled'}">${settings.showAppName ? 'مفعل' : 'معطل'}</span></div>
                    <div class="setting-item">شعار الشركة: <span class="${settings.showCompanyLogo ? 'enabled' : 'disabled'}">${settings.showCompanyLogo ? 'مفعل' : 'معطل'}</span></div>
                    <div class="setting-item">تاريخ الطباعة: <span class="${settings.showPrintDate ? 'enabled' : 'disabled'}">${settings.showPrintDate ? 'مفعل' : 'معطل'}</span></div>
                    <div class="setting-item">أرقام الصفحات: <span class="${settings.showPageNumbers ? 'enabled' : 'disabled'}">${settings.showPageNumbers ? 'مفعل' : 'معطل'}</span></div>
                    <div class="setting-item">اتجاه الطباعة: <strong>${settings.orientation === 'portrait' ? 'عمودي' : 'أفقي'}</strong></div>
                    <div class="setting-item">حجم الورق: <strong>${settings.pageSize}</strong></div>
                </div>

                <!-- رأس الصفحة -->
                <div class="print-header">
                    ${settings.showCompanyLogo && logoUrl ? `<img src="${logoUrl}" alt="شعار الشركة" class="company-logo">` : ''}
                    <div class="company-name">${companyName}</div>
                    ${settings.headerText ? `<div class="header-text">${settings.headerText}</div>` : ''}
                    ${settings.showPrintDate ? `<div class="print-date">تاريخ الطباعة: ${currentDate}</div>` : ''}
                </div>

                <!-- منطقة المحتوى -->
                <div class="content-area">
                    <p>هذه معاينة لشكل الملفات المطبوعة</p>
                    <p>سيظهر محتوى التقارير والفواتير هنا</p>
                </div>

                <!-- تذييل الصفحة -->
                <div class="print-footer">
                    ${settings.footerText ? `<div>${settings.footerText}</div>` : ''}
                    ${settings.showAppName ? `<div class="app-name">تم الإنشاء بواسطة SAM PRO</div>` : ''}
                </div>

                <!-- رقم الصفحة -->
                ${settings.showPageNumbers ? `<div class="page-number">صفحة 1</div>` : ''}
            </div>

            <script>
                // إضافة زر طباعة
                document.addEventListener('DOMContentLoaded', function() {
                    const printBtn = document.createElement('button');
                    printBtn.innerHTML = '🖨️ طباعة المعاينة';
                    printBtn.style.cssText = 'position: fixed; top: 20px; left: 20px; padding: 10px 20px; background: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer; z-index: 1000;';
                    printBtn.onclick = () => window.print();
                    document.body.appendChild(printBtn);
                });
            </script>
        </body>
        </html>
    `;
}

/**
 * طباعة متقدمة مع تحديد المحتوى
 */
function advancedPrint(contentType, data = null) {
    console.log('🖨️ بدء الطباعة المتقدمة...', { contentType, data });

    // إنشاء نافذة اختيار المحتوى
    showPrintSelectionDialog(contentType, data);
}

/**
 * عرض نافذة اختيار محتوى الطباعة
 */
function showPrintSelectionDialog(contentType, data) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'printSelectionModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <i class="fas fa-print me-2"></i>
                        خيارات الطباعة المتقدمة
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h6 class="mb-3">
                                <i class="fas fa-list-check me-2"></i>
                                اختر المحتوى المراد طباعته:
                            </h6>
                            <div id="printContentOptions">
                                ${generatePrintContentOptions(contentType, data)}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h6 class="mb-3">
                                <i class="fas fa-cogs me-2"></i>
                                إعدادات الطباعة:
                            </h6>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="printShowAppName" ${appData.settings.printSettings?.showAppName !== false ? 'checked' : ''}>
                                    <label class="form-check-label" for="printShowAppName">
                                        إظهار اسم التطبيق
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="printShowDate" ${appData.settings.printSettings?.showPrintDate !== false ? 'checked' : ''}>
                                    <label class="form-check-label" for="printShowDate">
                                        إظهار تاريخ الطباعة
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="printShowPageNumbers" ${appData.settings.printSettings?.showPageNumbers !== false ? 'checked' : ''}>
                                    <label class="form-check-label" for="printShowPageNumbers">
                                        إظهار أرقام الصفحات
                                    </label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="printOrientation" class="form-label">اتجاه الطباعة:</label>
                                <select class="form-select" id="printOrientation">
                                    <option value="portrait">عمودي</option>
                                    <option value="landscape">أفقي</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        <i class="fas fa-times me-2"></i>
                        إلغاء
                    </button>
                    <button type="button" class="btn btn-outline-info" onclick="previewSelectedContent()">
                        <i class="fas fa-eye me-2"></i>
                        معاينة
                    </button>
                    <button type="button" class="btn btn-primary" onclick="printSelectedContent()">
                        <i class="fas fa-print me-2"></i>
                        طباعة
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // إزالة المودال عند الإغلاق
    modal.addEventListener('hidden.bs.modal', () => {
        document.body.removeChild(modal);
    });
}

/**
 * إنشاء خيارات محتوى الطباعة
 */
function generatePrintContentOptions(contentType, data) {
    let options = '';

    switch (contentType) {
        case 'invoice':
            options = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printInvoiceHeader" checked>
                    <label class="form-check-label" for="printInvoiceHeader">
                        رأس الفاتورة (معلومات الشركة والعميل)
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printInvoiceItems" checked>
                    <label class="form-check-label" for="printInvoiceItems">
                        عناصر الفاتورة
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printInvoiceTotals" checked>
                    <label class="form-check-label" for="printInvoiceTotals">
                        الإجماليات والضرائب
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printInvoiceNotes">
                    <label class="form-check-label" for="printInvoiceNotes">
                        الملاحظات
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printInvoiceSignature">
                    <label class="form-check-label" for="printInvoiceSignature">
                        مكان التوقيع
                    </label>
                </div>
            `;
            break;

        case 'report':
            options = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printReportTitle" checked>
                    <label class="form-check-label" for="printReportTitle">
                        عنوان التقرير
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printReportSummary" checked>
                    <label class="form-check-label" for="printReportSummary">
                        ملخص التقرير
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printReportDetails" checked>
                    <label class="form-check-label" for="printReportDetails">
                        تفاصيل التقرير
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printReportCharts">
                    <label class="form-check-label" for="printReportCharts">
                        الرسوم البيانية
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printReportFooter">
                    <label class="form-check-label" for="printReportFooter">
                        تذييل التقرير
                    </label>
                </div>
            `;
            break;

        case 'list':
            options = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printListHeader" checked>
                    <label class="form-check-label" for="printListHeader">
                        رأس القائمة
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printListItems" checked>
                    <label class="form-check-label" for="printListItems">
                        عناصر القائمة
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printListSummary">
                    <label class="form-check-label" for="printListSummary">
                        ملخص القائمة
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printListNumbers" checked>
                    <label class="form-check-label" for="printListNumbers">
                        أرقام العناصر
                    </label>
                </div>
            `;
            break;

        default:
            options = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printFullContent" checked>
                    <label class="form-check-label" for="printFullContent">
                        المحتوى كاملاً
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="printSelectedOnly">
                    <label class="form-check-label" for="printSelectedOnly">
                        المحتوى المحدد فقط
                    </label>
                </div>
            `;
    }

    return options;
}

/**
 * معاينة المحتوى المحدد
 */
function previewSelectedContent() {
    console.log('👁️ معاينة المحتوى المحدد...');

    const selectedOptions = getSelectedPrintOptions();
    const printSettings = getCurrentPrintSettings();

    // إنشاء نافذة معاينة
    const previewWindow = window.open('', '_blank', 'width=900,height=700');
    previewWindow.document.write(generateSelectedContentPreview(selectedOptions, printSettings));
    previewWindow.document.close();
}

/**
 * طباعة المحتوى المحدد
 */
function printSelectedContent() {
    console.log('🖨️ طباعة المحتوى المحدد...');

    const selectedOptions = getSelectedPrintOptions();
    const printSettings = getCurrentPrintSettings();

    // إنشاء نافذة طباعة
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    printWindow.document.write(generatePrintableContent(selectedOptions, printSettings));
    printWindow.document.close();

    // طباعة تلقائية
    printWindow.onload = function() {
        printWindow.print();
        setTimeout(() => {
            printWindow.close();
        }, 1000);
    };

    // إغلاق مودال الخيارات
    const modal = bootstrap.Modal.getInstance(document.getElementById('printSelectionModal'));
    if (modal) {
        modal.hide();
    }
}

/**
 * الحصول على خيارات الطباعة المحددة
 */
function getSelectedPrintOptions() {
    const options = {};
    const checkboxes = document.querySelectorAll('#printSelectionModal input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        options[checkbox.id] = checkbox.checked;
    });

    return options;
}

/**
 * الحصول على إعدادات الطباعة الحالية
 */
function getCurrentPrintSettings() {
    return {
        showAppName: document.getElementById('printShowAppName')?.checked || false,
        showDate: document.getElementById('printShowDate')?.checked || false,
        showPageNumbers: document.getElementById('printShowPageNumbers')?.checked || false,
        orientation: document.getElementById('printOrientation')?.value || 'portrait',
        headerText: appData.settings.printSettings?.headerText || '',
        footerText: appData.settings.printSettings?.footerText || '',
        pageSize: appData.settings.printSettings?.pageSize || 'A4'
    };
}

/**
 * إنشاء محتوى قابل للطباعة
 */
function generatePrintableContent(selectedOptions, printSettings) {
    const currentDate = new Date().toLocaleDateString('ar-SY');
    const companyName = appData.settings.companyName || 'اسم الشركة';

    return `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>طباعة - ${companyName}</title>
            <style>
                @page {
                    size: ${printSettings.pageSize} ${printSettings.orientation};
                    margin: 1.5cm;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    direction: rtl;
                    text-align: right;
                    margin: 0;
                    padding: 0;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #333;
                }

                .print-header {
                    text-align: center;
                    border-bottom: 2px solid #007bff;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }

                .company-name {
                    font-size: 22px;
                    font-weight: bold;
                    color: #333;
                    margin: 10px 0;
                }

                .header-text {
                    font-size: 16px;
                    color: #666;
                    margin: 5px 0;
                }

                .print-date {
                    font-size: 12px;
                    color: #888;
                    margin-top: 10px;
                }

                .content-section {
                    margin: 20px 0;
                    page-break-inside: avoid;
                }

                .section-title {
                    font-size: 18px;
                    font-weight: bold;
                    color: #007bff;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 5px;
                    margin-bottom: 15px;
                }

                .invoice-info {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .invoice-info div {
                    flex: 1;
                }

                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }

                .items-table th,
                .items-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: center;
                }

                .items-table th {
                    background-color: #f8f9fa;
                    font-weight: bold;
                }

                .totals-section {
                    margin-top: 20px;
                    text-align: left;
                }

                .total-row {
                    display: flex;
                    justify-content: space-between;
                    margin: 5px 0;
                    padding: 5px 0;
                }

                .total-row.final {
                    border-top: 2px solid #007bff;
                    font-weight: bold;
                    font-size: 16px;
                }

                .print-footer {
                    text-align: center;
                    border-top: 1px solid #ddd;
                    padding-top: 15px;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #666;
                }

                .app-name {
                    font-weight: bold;
                    color: #007bff;
                }

                .page-number {
                    position: fixed;
                    bottom: 10px;
                    left: 10px;
                    font-size: 10px;
                    color: #888;
                }

                .signature-area {
                    margin-top: 40px;
                    display: flex;
                    justify-content: space-between;
                }

                .signature-box {
                    text-align: center;
                    width: 200px;
                }

                .signature-line {
                    border-top: 1px solid #333;
                    margin-top: 50px;
                    padding-top: 5px;
                }

                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }

                    .no-print {
                        display: none !important;
                    }
                }
            </style>
        </head>
        <body>
            ${generatePrintHeader(printSettings, companyName, currentDate)}
            ${generatePrintContent(selectedOptions)}
            ${generatePrintFooter(printSettings)}
            ${printSettings.showPageNumbers ? '<div class="page-number">صفحة 1</div>' : ''}
        </body>
        </html>
    `;
}

/**
 * إنشاء رأس الطباعة
 */
function generatePrintHeader(printSettings, companyName, currentDate) {
    let header = '';

    if (printSettings.showDate || printSettings.headerText || companyName) {
        header = `
            <div class="print-header">
                <div class="company-name">${companyName}</div>
                ${printSettings.headerText ? `<div class="header-text">${printSettings.headerText}</div>` : ''}
                ${printSettings.showDate ? `<div class="print-date">تاريخ الطباعة: ${currentDate}</div>` : ''}
            </div>
        `;
    }

    return header;
}

/**
 * إنشاء تذييل الطباعة
 */
function generatePrintFooter(printSettings) {
    let footer = '';

    if (printSettings.showAppName || printSettings.footerText) {
        footer = `
            <div class="print-footer">
                ${printSettings.footerText ? `<div>${printSettings.footerText}</div>` : ''}
                ${printSettings.showAppName ? `<div class="app-name">تم الإنشاء بواسطة SAM PRO</div>` : ''}
            </div>
        `;
    }

    return footer;
}

/**
 * إنشاء محتوى الطباعة حسب الخيارات المحددة
 */
function generatePrintContent(selectedOptions) {
    let content = '<div class="content-section">';

    // محتوى تجريبي - يمكن تخصيصه حسب نوع المحتوى
    if (selectedOptions.printInvoiceHeader || selectedOptions.printListHeader || selectedOptions.printReportTitle) {
        content += `
            <div class="section-title">معلومات الفاتورة</div>
            <div class="invoice-info">
                <div>
                    <strong>رقم الفاتورة:</strong> INV-001<br>
                    <strong>التاريخ:</strong> ${new Date().toLocaleDateString('ar-SY')}
                </div>
                <div>
                    <strong>العميل:</strong> أحمد محمد<br>
                    <strong>الهاتف:</strong> 0991234567
                </div>
            </div>
        `;
    }

    if (selectedOptions.printInvoiceItems || selectedOptions.printListItems || selectedOptions.printReportDetails) {
        content += `
            <div class="section-title">العناصر</div>
            <table class="items-table">
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>الصنف</th>
                        <th>الكمية</th>
                        <th>السعر</th>
                        <th>المجموع</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>لابتوب ديل</td>
                        <td>1</td>
                        <td>1,000.00 ل.س</td>
                        <td>1,000.00 ل.س</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ماوس لاسلكي</td>
                        <td>2</td>
                        <td>25.00 ل.س</td>
                        <td>50.00 ل.س</td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    if (selectedOptions.printInvoiceTotals || selectedOptions.printListSummary || selectedOptions.printReportSummary) {
        content += `
            <div class="totals-section">
                <div class="total-row">
                    <span>المجموع الفرعي:</span>
                    <span>1,050.00 ل.س</span>
                </div>
                <div class="total-row">
                    <span>الخصم:</span>
                    <span>0.00 ل.س</span>
                </div>
                <div class="total-row">
                    <span>الضريبة:</span>
                    <span>0.00 ل.س</span>
                </div>
                <div class="total-row final">
                    <span>المجموع الإجمالي:</span>
                    <span>1,050.00 ل.س</span>
                </div>
            </div>
        `;
    }

    if (selectedOptions.printInvoiceSignature) {
        content += `
            <div class="signature-area">
                <div class="signature-box">
                    <div class="signature-line">توقيع العميل</div>
                </div>
                <div class="signature-box">
                    <div class="signature-line">توقيع المندوب</div>
                </div>
            </div>
        `;
    }

    if (selectedOptions.printInvoiceNotes) {
        content += `
            <div class="section-title">ملاحظات</div>
            <div style="min-height: 60px; border: 1px dashed #ddd; padding: 10px;">
                شكراً لتعاملكم معنا
            </div>
        `;
    }

    content += '</div>';
    return content;
}

/**
 * إنشاء معاينة للمحتوى المحدد
 */
function generateSelectedContentPreview(selectedOptions, printSettings) {
    const currentDate = new Date().toLocaleDateString('ar-SY');
    const companyName = appData.settings.companyName || 'اسم الشركة';

    return `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>معاينة الطباعة - ${companyName}</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    direction: rtl;
                    text-align: right;
                    margin: 0;
                    padding: 20px;
                    background: #f8f9fa;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #333;
                }

                .preview-container {
                    background: white;
                    padding: 30px;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    max-width: 800px;
                    margin: 0 auto;
                    min-height: 600px;
                }

                .preview-header {
                    background: #e3f2fd;
                    padding: 15px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    text-align: center;
                }

                .preview-title {
                    font-size: 18px;
                    font-weight: bold;
                    color: #1976d2;
                    margin: 0;
                }

                .selected-options {
                    background: #f1f8e9;
                    padding: 10px;
                    border-radius: 5px;
                    margin-bottom: 20px;
                    font-size: 12px;
                }

                .selected-options h6 {
                    margin: 0 0 10px 0;
                    color: #388e3c;
                }

                .option-item {
                    display: inline-block;
                    background: #4caf50;
                    color: white;
                    padding: 2px 8px;
                    border-radius: 3px;
                    margin: 2px;
                    font-size: 11px;
                }

                .print-controls {
                    position: fixed;
                    top: 20px;
                    left: 20px;
                    z-index: 1000;
                }

                .print-controls button {
                    margin: 5px;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                }

                .btn-print {
                    background: #007bff;
                    color: white;
                }

                .btn-close {
                    background: #6c757d;
                    color: white;
                }

                /* استيراد أنماط الطباعة */
                .print-header {
                    text-align: center;
                    border-bottom: 2px solid #007bff;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }

                .company-name {
                    font-size: 22px;
                    font-weight: bold;
                    color: #333;
                    margin: 10px 0;
                }

                .header-text {
                    font-size: 16px;
                    color: #666;
                    margin: 5px 0;
                }

                .print-date {
                    font-size: 12px;
                    color: #888;
                    margin-top: 10px;
                }

                .content-section {
                    margin: 20px 0;
                }

                .section-title {
                    font-size: 18px;
                    font-weight: bold;
                    color: #007bff;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 5px;
                    margin-bottom: 15px;
                }

                .invoice-info {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

                .invoice-info div {
                    flex: 1;
                }

                .items-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }

                .items-table th,
                .items-table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: center;
                }

                .items-table th {
                    background-color: #f8f9fa;
                    font-weight: bold;
                }

                .totals-section {
                    margin-top: 20px;
                    text-align: left;
                }

                .total-row {
                    display: flex;
                    justify-content: space-between;
                    margin: 5px 0;
                    padding: 5px 0;
                }

                .total-row.final {
                    border-top: 2px solid #007bff;
                    font-weight: bold;
                    font-size: 16px;
                }

                .print-footer {
                    text-align: center;
                    border-top: 1px solid #ddd;
                    padding-top: 15px;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #666;
                }

                .app-name {
                    font-weight: bold;
                    color: #007bff;
                }

                .signature-area {
                    margin-top: 40px;
                    display: flex;
                    justify-content: space-between;
                }

                .signature-box {
                    text-align: center;
                    width: 200px;
                }

                .signature-line {
                    border-top: 1px solid #333;
                    margin-top: 50px;
                    padding-top: 5px;
                }

                @media print {
                    body {
                        background: white;
                    }
                    .preview-container {
                        box-shadow: none;
                        border: none;
                    }
                    .preview-header,
                    .selected-options,
                    .print-controls {
                        display: none !important;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-controls">
                <button class="btn-print" onclick="window.print()">🖨️ طباعة</button>
                <button class="btn-close" onclick="window.close()">✖️ إغلاق</button>
            </div>

            <div class="preview-container">
                <div class="preview-header">
                    <h3 class="preview-title">معاينة الطباعة</h3>
                    <p>هذه معاينة للمحتوى الذي سيتم طباعته</p>
                </div>

                <div class="selected-options">
                    <h6>الخيارات المحددة:</h6>
                    ${generateSelectedOptionsDisplay(selectedOptions)}
                </div>

                ${generatePrintHeader(printSettings, companyName, currentDate)}
                ${generatePrintContent(selectedOptions)}
                ${generatePrintFooter(printSettings)}
            </div>
        </body>
        </html>
    `;
}

/**
 * عرض الخيارات المحددة
 */
function generateSelectedOptionsDisplay(selectedOptions) {
    let display = '';

    Object.keys(selectedOptions).forEach(key => {
        if (selectedOptions[key]) {
            const optionName = getOptionDisplayName(key);
            display += `<span class="option-item">${optionName}</span>`;
        }
    });

    return display || '<span class="option-item">لا توجد خيارات محددة</span>';
}

/**
 * الحصول على اسم الخيار للعرض
 */
function getOptionDisplayName(optionKey) {
    const names = {
        'printInvoiceHeader': 'رأس الفاتورة',
        'printInvoiceItems': 'عناصر الفاتورة',
        'printInvoiceTotals': 'الإجماليات',
        'printInvoiceNotes': 'الملاحظات',
        'printInvoiceSignature': 'التوقيع',
        'printReportTitle': 'عنوان التقرير',
        'printReportSummary': 'ملخص التقرير',
        'printReportDetails': 'تفاصيل التقرير',
        'printReportCharts': 'الرسوم البيانية',
        'printReportFooter': 'تذييل التقرير',
        'printListHeader': 'رأس القائمة',
        'printListItems': 'عناصر القائمة',
        'printListSummary': 'ملخص القائمة',
        'printListNumbers': 'أرقام العناصر',
        'printShowAppName': 'اسم التطبيق',
        'printShowDate': 'تاريخ الطباعة',
        'printShowPageNumbers': 'أرقام الصفحات'
    };

    return names[optionKey] || optionKey;
}

/**
 * صفحة كشف دفعات العميل
 */
function getCustomerPaymentsReportHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-money-bill-wave me-2"></i>
                        كشف دفعات العميل
                    </h1>
                    <div>
                        <button class="btn btn-outline-info me-2" onclick="advancedPrint('report')">
                            <i class="fas fa-print me-2"></i>
                            طباعة متقدمة
                        </button>
                        <button class="btn btn-primary" onclick="exportCustomerPaymentsReport('print')">
                            <i class="fas fa-file-pdf me-2"></i>
                            طباعة التقرير
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر التقرير -->
        <div class="card shadow mb-4">
            <div class="card-header">
                <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fas fa-filter me-2"></i>
                    فلاتر التقرير
                </h6>
            </div>
            <div class="card-body">
                <form id="customerPaymentsReportForm" onsubmit="generateCustomerPaymentsReport(event)">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="customerPaymentsFromDate" class="form-label">من تاريخ</label>
                            <input type="date" class="form-control" id="customerPaymentsFromDate" required>
                        </div>
                        <div class="col-md-3">
                            <label for="customerPaymentsToDate" class="form-label">إلى تاريخ</label>
                            <input type="date" class="form-control" id="customerPaymentsToDate" required>
                        </div>
                        <div class="col-md-4">
                            <label for="customerPaymentsCustomer" class="form-label">العميل</label>
                            <select class="form-select" id="customerPaymentsCustomer">
                                <option value="">جميع العملاء</option>
                                ${appData.customers.map(customer =>
                                    `<option value="${customer.id}">${customer.name}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">&nbsp;</label>
                            <div>
                                <button type="submit" class="btn btn-primary w-100">
                                    <i class="fas fa-chart-bar me-2"></i>
                                    إنشاء التقرير
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- نتائج التقرير -->
        <div class="card shadow">
            <div class="card-header">
                <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fas fa-table me-2"></i>
                    نتائج كشف دفعات العميل
                </h6>
            </div>
            <div class="card-body">
                <div id="customerPaymentsReportResults">
                    <div class="text-center text-muted py-5">
                        <i class="fas fa-chart-bar fa-3x mb-3"></i>
                        <p>اختر الفلاتر المطلوبة واضغط "إنشاء التقرير" لعرض النتائج</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة كشف دفعات المورد
 */
function getSupplierPaymentsReportHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-money-bill-wave me-2"></i>
                        كشف دفعات المورد
                    </h1>
                    <div>
                        <button class="btn btn-outline-info me-2" onclick="advancedPrint('report')">
                            <i class="fas fa-print me-2"></i>
                            طباعة متقدمة
                        </button>
                        <button class="btn btn-primary" onclick="exportSupplierPaymentsReport('print')">
                            <i class="fas fa-file-pdf me-2"></i>
                            طباعة التقرير
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر التقرير -->
        <div class="card shadow mb-4">
            <div class="card-header">
                <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fas fa-filter me-2"></i>
                    فلاتر التقرير
                </h6>
            </div>
            <div class="card-body">
                <form id="supplierPaymentsReportForm" onsubmit="generateSupplierPaymentsReport(event)">
                    <div class="row">
                        <div class="col-md-3">
                            <label for="supplierPaymentsFromDate" class="form-label">من تاريخ</label>
                            <input type="date" class="form-control" id="supplierPaymentsFromDate" required>
                        </div>
                        <div class="col-md-3">
                            <label for="supplierPaymentsToDate" class="form-label">إلى تاريخ</label>
                            <input type="date" class="form-control" id="supplierPaymentsToDate" required>
                        </div>
                        <div class="col-md-4">
                            <label for="supplierPaymentsSupplier" class="form-label">المورد</label>
                            <select class="form-select" id="supplierPaymentsSupplier">
                                <option value="">جميع الموردين</option>
                                ${appData.suppliers.map(supplier =>
                                    `<option value="${supplier.id}">${supplier.name}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">&nbsp;</label>
                            <div>
                                <button type="submit" class="btn btn-primary w-100">
                                    <i class="fas fa-chart-bar me-2"></i>
                                    إنشاء التقرير
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- نتائج التقرير -->
        <div class="card shadow">
            <div class="card-header">
                <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fas fa-table me-2"></i>
                    نتائج كشف دفعات المورد
                </h6>
            </div>
            <div class="card-body">
                <div id="supplierPaymentsReportResults">
                    <div class="text-center text-muted py-5">
                        <i class="fas fa-chart-bar fa-3x mb-3"></i>
                        <p>اختر الفلاتر المطلوبة واضغط "إنشاء التقرير" لعرض النتائج</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة كشف حساب المورد
 */
function getSupplierStatementHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-file-invoice me-2"></i>
                        كشف حساب المورد
                    </h1>
                    <div>
                        <button class="btn btn-outline-info me-2" onclick="advancedPrint('report')">
                            <i class="fas fa-print me-2"></i>
                            طباعة متقدمة
                        </button>
                        <button class="btn btn-primary" onclick="exportSupplierStatement('print')">
                            <i class="fas fa-file-pdf me-2"></i>
                            طباعة الكشف
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- اختيار المورد -->
        <div class="card shadow mb-4">
            <div class="card-header">
                <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fas fa-user-tie me-2"></i>
                    اختيار المورد والفترة
                </h6>
            </div>
            <div class="card-body">
                <form id="supplierStatementForm" onsubmit="generateSupplierStatement(event)">
                    <div class="row">
                        <div class="col-md-4">
                            <label for="supplierStatementSupplier" class="form-label">المورد *</label>
                            <select class="form-select" id="supplierStatementSupplier" required>
                                <option value="">اختر المورد</option>
                                ${appData.suppliers.map(supplier =>
                                    `<option value="${supplier.id}">${supplier.name}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="supplierStatementFromDate" class="form-label">من تاريخ</label>
                            <input type="date" class="form-control" id="supplierStatementFromDate">
                        </div>
                        <div class="col-md-3">
                            <label for="supplierStatementToDate" class="form-label">إلى تاريخ</label>
                            <input type="date" class="form-control" id="supplierStatementToDate">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">&nbsp;</label>
                            <div>
                                <button type="submit" class="btn btn-primary w-100">
                                    <i class="fas fa-file-alt me-2"></i>
                                    إنشاء الكشف
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <!-- نتائج كشف الحساب -->
        <div class="card shadow">
            <div class="card-header">
                <h6 class="m-0 font-weight-bold text-primary">
                    <i class="fas fa-table me-2"></i>
                    كشف حساب المورد
                </h6>
            </div>
            <div class="card-body">
                <div id="supplierStatementResults">
                    <div class="text-center text-muted py-5">
                        <i class="fas fa-file-alt fa-3x mb-3"></i>
                        <p>اختر المورد واضغط "إنشاء الكشف" لعرض كشف الحساب</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * إنشاء تقرير دفعات العميل
 */
function generateCustomerPaymentsReport(event) {
    event.preventDefault();
    console.log('📊 إنشاء تقرير دفعات العميل...');

    const fromDate = document.getElementById('customerPaymentsFromDate').value;
    const toDate = document.getElementById('customerPaymentsToDate').value;
    const customerId = document.getElementById('customerPaymentsCustomer').value;

    // فلترة البيانات
    let payments = appData.payments || [];

    // فلترة حسب التاريخ
    if (fromDate) {
        payments = payments.filter(payment => payment.paymentDate >= fromDate);
    }
    if (toDate) {
        payments = payments.filter(payment => payment.paymentDate <= toDate);
    }

    // فلترة حسب العميل
    if (customerId) {
        payments = payments.filter(payment => payment.customerId == customerId);
    }

    // فلترة دفعات العملاء فقط
    payments = payments.filter(payment => payment.customerId);

    // إنشاء HTML للنتائج
    const resultsHTML = generateCustomerPaymentsReportHTML(payments, fromDate, toDate, customerId);
    document.getElementById('customerPaymentsReportResults').innerHTML = resultsHTML;

    console.log('✅ تم إنشاء تقرير دفعات العميل');
}

/**
 * إنشاء تقرير دفعات المورد
 */
function generateSupplierPaymentsReport(event) {
    event.preventDefault();
    console.log('📊 إنشاء تقرير دفعات المورد...');

    const fromDate = document.getElementById('supplierPaymentsFromDate').value;
    const toDate = document.getElementById('supplierPaymentsToDate').value;
    const supplierId = document.getElementById('supplierPaymentsSupplier').value;

    // فلترة البيانات
    let payments = appData.payments || [];

    // فلترة حسب التاريخ
    if (fromDate) {
        payments = payments.filter(payment => payment.paymentDate >= fromDate);
    }
    if (toDate) {
        payments = payments.filter(payment => payment.paymentDate <= toDate);
    }

    // فلترة حسب المورد
    if (supplierId) {
        payments = payments.filter(payment => payment.supplierId == supplierId);
    }

    // فلترة دفعات الموردين فقط
    payments = payments.filter(payment => payment.supplierId);

    // إنشاء HTML للنتائج
    const resultsHTML = generateSupplierPaymentsReportHTML(payments, fromDate, toDate, supplierId);
    document.getElementById('supplierPaymentsReportResults').innerHTML = resultsHTML;

    console.log('✅ تم إنشاء تقرير دفعات المورد');
}

/**
 * إنشاء كشف حساب المورد
 */
function generateSupplierStatement(event) {
    event.preventDefault();
    console.log('📊 إنشاء كشف حساب المورد...');

    const supplierId = document.getElementById('supplierStatementSupplier').value;
    const fromDate = document.getElementById('supplierStatementFromDate').value;
    const toDate = document.getElementById('supplierStatementToDate').value;

    if (!supplierId) {
        alert('يرجى اختيار المورد');
        return;
    }

    const supplier = appData.suppliers.find(s => s.id == supplierId);
    if (!supplier) {
        alert('المورد غير موجود');
        return;
    }

    // جمع المعاملات
    let transactions = [];

    // إضافة فواتير المشتريات
    const purchaseInvoices = appData.invoices.filter(inv =>
        inv.invoiceType === 'purchase' &&
        inv.supplierId == supplierId &&
        (!fromDate || inv.invoiceDate >= fromDate) &&
        (!toDate || inv.invoiceDate <= toDate)
    );

    purchaseInvoices.forEach(invoice => {
        transactions.push({
            date: invoice.invoiceDate,
            type: 'invoice',
            description: `فاتورة مشتريات رقم ${invoice.invoiceNumber}`,
            debit: invoice.totalAmount,
            credit: 0,
            balance: 0,
            reference: invoice.id
        });
    });

    // إضافة المدفوعات
    const supplierPayments = (appData.payments || []).filter(payment =>
        payment.supplierId == supplierId &&
        (!fromDate || payment.paymentDate >= fromDate) &&
        (!toDate || payment.paymentDate <= toDate)
    );

    supplierPayments.forEach(payment => {
        transactions.push({
            date: payment.paymentDate,
            type: 'payment',
            description: `دفعة رقم ${payment.paymentNumber || payment.id}`,
            debit: 0,
            credit: payment.amount,
            balance: 0,
            reference: payment.id
        });
    });

    // ترتيب المعاملات حسب التاريخ
    transactions.sort((a, b) => new Date(a.date) - new Date(b.date));

    // حساب الأرصدة
    let runningBalance = 0;
    transactions.forEach(transaction => {
        runningBalance += transaction.debit - transaction.credit;
        transaction.balance = runningBalance;
    });

    // إنشاء HTML للنتائج
    const resultsHTML = generateSupplierStatementHTML(supplier, transactions, fromDate, toDate);
    document.getElementById('supplierStatementResults').innerHTML = resultsHTML;

    console.log('✅ تم إنشاء كشف حساب المورد');
}

/**
 * إنشاء HTML لتقرير دفعات العميل
 */
function generateCustomerPaymentsReportHTML(payments, fromDate, toDate, customerId) {
    const selectedCustomer = customerId ? appData.customers.find(c => c.id == customerId) : null;
    const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);

    let html = `
        <div class="report-header mb-4">
            <div class="row">
                <div class="col-md-6">
                    <h5>كشف دفعات العميل</h5>
                    <p class="text-muted mb-0">
                        ${selectedCustomer ? `العميل: ${selectedCustomer.name}` : 'جميع العملاء'}
                    </p>
                    ${fromDate || toDate ? `<p class="text-muted mb-0">الفترة: ${fromDate || 'البداية'} - ${toDate || 'النهاية'}</p>` : ''}
                </div>
                <div class="col-md-6 text-end">
                    <div class="alert alert-info">
                        <strong>إجمالي الدفعات: ${formatCurrency(totalAmount)}</strong><br>
                        <small>عدد الدفعات: ${payments.length}</small>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (payments.length === 0) {
        html += `
            <div class="text-center text-muted py-5">
                <i class="fas fa-inbox fa-3x mb-3"></i>
                <p>لا توجد دفعات في الفترة المحددة</p>
            </div>
        `;
    } else {
        html += `
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>رقم الدفعة</th>
                            <th>التاريخ</th>
                            <th>العميل</th>
                            <th>المبلغ</th>
                            <th>طريقة الدفع</th>
                            <th>الملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        payments.forEach(payment => {
            const customer = appData.customers.find(c => c.id === payment.customerId);
            html += `
                <tr>
                    <td>${payment.paymentNumber || payment.id}</td>
                    <td>${payment.paymentDate}</td>
                    <td>${customer ? customer.name : '-'}</td>
                    <td class="text-end">${formatCurrency(payment.amount)}</td>
                    <td>${getPaymentMethodText(payment.paymentMethod)}</td>
                    <td>${payment.notes || '-'}</td>
                </tr>
            `;
        });

        html += `
                    </tbody>
                    <tfoot class="table-light">
                        <tr>
                            <th colspan="3">الإجمالي</th>
                            <th class="text-end">${formatCurrency(totalAmount)}</th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `;
    }

    return html;
}

/**
 * إنشاء HTML لتقرير دفعات المورد
 */
function generateSupplierPaymentsReportHTML(payments, fromDate, toDate, supplierId) {
    const selectedSupplier = supplierId ? appData.suppliers.find(s => s.id == supplierId) : null;
    const totalAmount = payments.reduce((sum, payment) => sum + payment.amount, 0);

    let html = `
        <div class="report-header mb-4">
            <div class="row">
                <div class="col-md-6">
                    <h5>كشف دفعات المورد</h5>
                    <p class="text-muted mb-0">
                        ${selectedSupplier ? `المورد: ${selectedSupplier.name}` : 'جميع الموردين'}
                    </p>
                    ${fromDate || toDate ? `<p class="text-muted mb-0">الفترة: ${fromDate || 'البداية'} - ${toDate || 'النهاية'}</p>` : ''}
                </div>
                <div class="col-md-6 text-end">
                    <div class="alert alert-warning">
                        <strong>إجمالي الدفعات: ${formatCurrency(totalAmount)}</strong><br>
                        <small>عدد الدفعات: ${payments.length}</small>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (payments.length === 0) {
        html += `
            <div class="text-center text-muted py-5">
                <i class="fas fa-inbox fa-3x mb-3"></i>
                <p>لا توجد دفعات في الفترة المحددة</p>
            </div>
        `;
    } else {
        html += `
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>رقم الدفعة</th>
                            <th>التاريخ</th>
                            <th>المورد</th>
                            <th>المبلغ</th>
                            <th>طريقة الدفع</th>
                            <th>الملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        payments.forEach(payment => {
            const supplier = appData.suppliers.find(s => s.id === payment.supplierId);
            html += `
                <tr>
                    <td>${payment.paymentNumber || payment.id}</td>
                    <td>${payment.paymentDate}</td>
                    <td>${supplier ? supplier.name : '-'}</td>
                    <td class="text-end">${formatCurrency(payment.amount)}</td>
                    <td>${getPaymentMethodText(payment.paymentMethod)}</td>
                    <td>${payment.notes || '-'}</td>
                </tr>
            `;
        });

        html += `
                    </tbody>
                    <tfoot class="table-light">
                        <tr>
                            <th colspan="3">الإجمالي</th>
                            <th class="text-end">${formatCurrency(totalAmount)}</th>
                            <th colspan="2"></th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `;
    }

    return html;
}

/**
 * إنشاء HTML لكشف حساب المورد
 */
function generateSupplierStatementHTML(supplier, transactions, fromDate, toDate) {
    const finalBalance = transactions.length > 0 ? transactions[transactions.length - 1].balance : 0;
    const totalDebits = transactions.reduce((sum, t) => sum + t.debit, 0);
    const totalCredits = transactions.reduce((sum, t) => sum + t.credit, 0);

    let html = `
        <div class="report-header mb-4">
            <div class="row">
                <div class="col-md-6">
                    <h5>كشف حساب المورد</h5>
                    <div class="supplier-info">
                        <p class="mb-1"><strong>اسم المورد:</strong> ${supplier.name}</p>
                        <p class="mb-1"><strong>الهاتف:</strong> ${supplier.phone || '-'}</p>
                        <p class="mb-1"><strong>البريد الإلكتروني:</strong> ${supplier.email || '-'}</p>
                        ${fromDate || toDate ? `<p class="mb-1"><strong>الفترة:</strong> ${fromDate || 'البداية'} - ${toDate || 'النهاية'}</p>` : ''}
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="alert alert-${finalBalance > 0 ? 'danger' : finalBalance < 0 ? 'success' : 'secondary'}">
                        <h6>ملخص الحساب</h6>
                        <p class="mb-1"><strong>إجمالي المشتريات:</strong> ${formatCurrency(totalDebits)}</p>
                        <p class="mb-1"><strong>إجمالي المدفوعات:</strong> ${formatCurrency(totalCredits)}</p>
                        <hr>
                        <p class="mb-0"><strong>الرصيد النهائي:</strong>
                            ${formatCurrency(Math.abs(finalBalance))}
                            ${finalBalance > 0 ? '(مدين لنا)' : finalBalance < 0 ? '(دائن لنا)' : '(متوازن)'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (transactions.length === 0) {
        html += `
            <div class="text-center text-muted py-5">
                <i class="fas fa-inbox fa-3x mb-3"></i>
                <p>لا توجد معاملات في الفترة المحددة</p>
            </div>
        `;
    } else {
        html += `
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead class="table-light">
                        <tr>
                            <th>التاريخ</th>
                            <th>البيان</th>
                            <th>مدين</th>
                            <th>دائن</th>
                            <th>الرصيد</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        transactions.forEach(transaction => {
            html += `
                <tr>
                    <td>${transaction.date}</td>
                    <td>${transaction.description}</td>
                    <td class="text-end">${transaction.debit > 0 ? formatCurrency(transaction.debit) : '-'}</td>
                    <td class="text-end">${transaction.credit > 0 ? formatCurrency(transaction.credit) : '-'}</td>
                    <td class="text-end">
                        <span class="badge bg-${transaction.balance > 0 ? 'danger' : transaction.balance < 0 ? 'success' : 'secondary'}">
                            ${formatCurrency(Math.abs(transaction.balance))}
                            ${transaction.balance > 0 ? ' مدين' : transaction.balance < 0 ? ' دائن' : ' متوازن'}
                        </span>
                    </td>
                </tr>
            `;
        });

        html += `
                    </tbody>
                    <tfoot class="table-light">
                        <tr>
                            <th colspan="2">الإجمالي</th>
                            <th class="text-end">${formatCurrency(totalDebits)}</th>
                            <th class="text-end">${formatCurrency(totalCredits)}</th>
                            <th class="text-end">
                                <span class="badge bg-${finalBalance > 0 ? 'danger' : finalBalance < 0 ? 'success' : 'secondary'}">
                                    ${formatCurrency(Math.abs(finalBalance))}
                                    ${finalBalance > 0 ? ' مدين' : finalBalance < 0 ? ' دائن' : ' متوازن'}
                                </span>
                            </th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `;
    }

    return html;
}

/**
 * وظائف الطباعة للتقارير الجديدة
 */
function exportCustomerPaymentsReport(format) {
    console.log('🖨️ طباعة تقرير دفعات العميل...');

    const reportContent = document.getElementById('customerPaymentsReportResults').innerHTML;
    if (!reportContent || reportContent.includes('اختر الفلاتر')) {
        alert('يرجى إنشاء التقرير أولاً');
        return;
    }

    if (format === 'print') {
        printReportContent('كشف دفعات العميل', reportContent);
    } else {
        advancedPrint('report', { title: 'كشف دفعات العميل', content: reportContent });
    }
}

function exportSupplierPaymentsReport(format) {
    console.log('🖨️ طباعة تقرير دفعات المورد...');

    const reportContent = document.getElementById('supplierPaymentsReportResults').innerHTML;
    if (!reportContent || reportContent.includes('اختر الفلاتر')) {
        alert('يرجى إنشاء التقرير أولاً');
        return;
    }

    if (format === 'print') {
        printReportContent('كشف دفعات المورد', reportContent);
    } else {
        advancedPrint('report', { title: 'كشف دفعات المورد', content: reportContent });
    }
}

function exportSupplierStatement(format) {
    console.log('🖨️ طباعة كشف حساب المورد...');

    const reportContent = document.getElementById('supplierStatementResults').innerHTML;
    if (!reportContent || reportContent.includes('اختر المورد')) {
        alert('يرجى إنشاء كشف الحساب أولاً');
        return;
    }

    if (format === 'print') {
        printReportContent('كشف حساب المورد', reportContent);
    } else {
        advancedPrint('report', { title: 'كشف حساب المورد', content: reportContent });
    }
}

/**
 * طباعة محتوى التقرير
 */
function printReportContent(title, content) {
    const printWindow = window.open('', '_blank', 'width=900,height=700');
    const companyName = appData.settings.companyName || 'اسم الشركة';
    const currentDate = new Date().toLocaleDateString('ar-SY');
    const printSettings = appData.settings.printSettings || {};

    printWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title} - ${companyName}</title>
            <style>
                @page {
                    size: A4 portrait;
                    margin: 1.5cm;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    direction: rtl;
                    text-align: right;
                    margin: 0;
                    padding: 0;
                    font-size: 14px;
                    line-height: 1.6;
                    color: #333;
                }

                .print-header {
                    text-align: center;
                    border-bottom: 2px solid #007bff;
                    padding-bottom: 15px;
                    margin-bottom: 20px;
                }

                .company-name {
                    font-size: 22px;
                    font-weight: bold;
                    color: #333;
                    margin: 10px 0;
                }

                .report-title {
                    font-size: 18px;
                    color: #007bff;
                    margin: 10px 0;
                }

                .print-date {
                    font-size: 12px;
                    color: #888;
                    margin-top: 10px;
                }

                .report-content {
                    margin: 20px 0;
                }

                .table {
                    width: 100%;
                    border-collapse: collapse;
                    margin: 20px 0;
                }

                .table th,
                .table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: center;
                }

                .table th {
                    background-color: #f8f9fa;
                    font-weight: bold;
                }

                .table-light th {
                    background-color: #f8f9fa;
                }

                .text-end {
                    text-align: left;
                }

                .alert {
                    padding: 15px;
                    margin-bottom: 20px;
                    border: 1px solid transparent;
                    border-radius: 4px;
                }

                .alert-info {
                    color: #0c5460;
                    background-color: #d1ecf1;
                    border-color: #bee5eb;
                }

                .alert-warning {
                    color: #856404;
                    background-color: #fff3cd;
                    border-color: #ffeaa7;
                }

                .alert-danger {
                    color: #721c24;
                    background-color: #f8d7da;
                    border-color: #f5c6cb;
                }

                .alert-success {
                    color: #155724;
                    background-color: #d4edda;
                    border-color: #c3e6cb;
                }

                .alert-secondary {
                    color: #383d41;
                    background-color: #e2e3e5;
                    border-color: #d6d8db;
                }

                .badge {
                    display: inline-block;
                    padding: 0.25em 0.4em;
                    font-size: 75%;
                    font-weight: 700;
                    line-height: 1;
                    text-align: center;
                    white-space: nowrap;
                    vertical-align: baseline;
                    border-radius: 0.25rem;
                }

                .bg-danger { background-color: #dc3545; color: white; }
                .bg-success { background-color: #28a745; color: white; }
                .bg-secondary { background-color: #6c757d; color: white; }

                .print-footer {
                    text-align: center;
                    border-top: 1px solid #ddd;
                    padding-top: 15px;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #666;
                }

                .app-name {
                    font-weight: bold;
                    color: #007bff;
                }

                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                }
            </style>
        </head>
        <body>
            <div class="print-header">
                <div class="company-name">${companyName}</div>
                <div class="report-title">${title}</div>
                ${printSettings.showPrintDate !== false ? `<div class="print-date">تاريخ الطباعة: ${currentDate}</div>` : ''}
            </div>

            <div class="report-content">
                ${content}
            </div>

            <div class="print-footer">
                ${printSettings.footerText ? `<div>${printSettings.footerText}</div>` : ''}
                ${printSettings.showAppName !== false ? `<div class="app-name">تم الإنشاء بواسطة SAM PRO</div>` : ''}
            </div>
        </body>
        </html>
    `);

    printWindow.document.close();

    printWindow.onload = function() {
        printWindow.print();
        setTimeout(() => {
            printWindow.close();
        }, 1000);
    };
}

/**
 * الحصول على نص طريقة الدفع
 */
function getPaymentMethodText(method) {
    const methods = {
        'cash': 'نقداً',
        'bank': 'تحويل بنكي',
        'check': 'شيك',
        'card': 'بطاقة ائتمان',
        'other': 'أخرى'
    };
    return methods[method] || method || '-';
}

/**
 * رفع شعار الشركة
 */
function uploadLogo(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            appData.settings.logoUrl = e.target.result;
            saveData();
            alert('تم رفع الشعار بنجاح');
            showPage('settings'); // إعادة تحميل الصفحة لعرض الشعار
        };
        reader.readAsDataURL(file);
    }
}

/**
 * إنشاء نسخة احتياطية
 */
function createBackup() {
    const backupName = document.getElementById('backupName').value || 'backup';
    const includeSettings = document.getElementById('includeSettings').checked;
    const includeData = document.getElementById('includeData').checked;

    const backup = {
        name: backupName,
        date: new Date().toISOString(),
        version: '1.0.0',
        data: {}
    };

    if (includeSettings) {
        backup.data.settings = appData.settings;
    }

    if (includeData) {
        backup.data.customers = appData.customers;
        backup.data.suppliers = appData.suppliers;
        backup.data.products = appData.products;
        backup.data.warehouses = appData.warehouses;
        backup.data.invoices = appData.invoices;
        backup.data.payments = appData.payments;
        backup.data.journalEntries = appData.journalEntries;
        backup.data.inventoryMovements = appData.inventoryMovements;
    }

    // تحميل الملف
    const dataStr = JSON.stringify(backup, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `${backupName}_${new Date().toISOString().split('T')[0]}.json`;
    link.click();

    alert('تم إنشاء النسخة الاحتياطية وتحميلها بنجاح');
}

/**
 * التحقق من ملف النسخة الاحتياطية
 */
function validateBackupFile(input) {
    const file = input.files[0];
    const restoreBtn = document.getElementById('restoreBtn');
    const confirmRestore = document.getElementById('confirmRestore');
    const backupFileInfo = document.getElementById('backupFileInfo');
    const backupDetails = document.getElementById('backupDetails');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const backup = JSON.parse(e.target.result);

                // عرض معلومات النسخة الاحتياطية
                backupDetails.innerHTML = `
                    <strong>اسم النسخة:</strong> ${backup.name || 'غير محدد'}<br>
                    <strong>التاريخ:</strong> ${backup.date ? new Date(backup.date).toLocaleString('ar-SY') : 'غير محدد'}<br>
                    <strong>الإصدار:</strong> ${backup.version || 'غير محدد'}<br>
                    <strong>البيانات المتضمنة:</strong> ${Object.keys(backup.data || {}).join(', ')}
                `;

                backupFileInfo.style.display = 'block';

                // تفعيل زر الاستعادة عند تأكيد المستخدم
                confirmRestore.addEventListener('change', function() {
                    restoreBtn.disabled = !this.checked;
                });

            } catch (error) {
                alert('ملف النسخة الاحتياطية غير صالح');
                input.value = '';
                backupFileInfo.style.display = 'none';
                restoreBtn.disabled = true;
            }
        };
        reader.readAsText(file);
    } else {
        backupFileInfo.style.display = 'none';
        restoreBtn.disabled = true;
    }
}

/**
 * استعادة نسخة احتياطية
 */
function restoreBackup() {
    const fileInput = document.getElementById('backupFile');
    const file = fileInput.files[0];

    if (!file) {
        alert('يرجى اختيار ملف النسخة الاحتياطية');
        return;
    }

    if (!confirm('هل أنت متأكد من استعادة النسخة الاحتياطية؟ سيتم استبدال جميع البيانات الحالية.')) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const backup = JSON.parse(e.target.result);

            // استعادة البيانات
            if (backup.data) {
                if (backup.data.settings) appData.settings = backup.data.settings;
                if (backup.data.customers) appData.customers = backup.data.customers;
                if (backup.data.suppliers) appData.suppliers = backup.data.suppliers;
                if (backup.data.products) appData.products = backup.data.products;
                if (backup.data.warehouses) appData.warehouses = backup.data.warehouses;
                if (backup.data.invoices) appData.invoices = backup.data.invoices;
                if (backup.data.payments) appData.payments = backup.data.payments;
                if (backup.data.journalEntries) appData.journalEntries = backup.data.journalEntries;
                if (backup.data.inventoryMovements) appData.inventoryMovements = backup.data.inventoryMovements;
            }

            saveData();
            alert('تم استعادة النسخة الاحتياطية بنجاح');
            showPage('dashboard');

        } catch (error) {
            alert('حدث خطأ أثناء استعادة النسخة الاحتياطية');
        }
    };
    reader.readAsText(file);
}

/**
 * عرض نافذة التحويل بين المخازن
 */
function showTransferModal() {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'transferModal';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">تحويل بين المخازن</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form id="transferForm">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="transferProduct" class="form-label">المنتج <span class="text-danger">*</span></label>
                                <select class="form-select" id="transferProduct" required>
                                    <option value="">اختر المنتج</option>
                                    ${appData.products.map(p => `<option value="${p.id}">${p.name} (${p.code})</option>`).join('')}
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="transferQuantity" class="form-label">الكمية <span class="text-danger">*</span></label>
                                <input type="number" class="form-control" id="transferQuantity" min="0" step="0.01" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label for="fromWarehouse" class="form-label">من المخزن <span class="text-danger">*</span></label>
                                <select class="form-select" id="fromWarehouse" required>
                                    <option value="">اختر المخزن</option>
                                    ${appData.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="toWarehouse" class="form-label">إلى المخزن <span class="text-danger">*</span></label>
                                <select class="form-select" id="toWarehouse" required>
                                    <option value="">اختر المخزن</option>
                                    ${appData.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                                </select>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="transferNotes" class="form-label">ملاحظات</label>
                            <textarea class="form-control" id="transferNotes" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                    <button type="button" class="btn btn-primary" onclick="saveTransfer()">تنفيذ التحويل</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    // إزالة النافذة عند الإغلاق
    modal.addEventListener('hidden.bs.modal', function() {
        document.body.removeChild(modal);
    });
}

/**
 * حفظ التحويل بين المخازن
 */
function saveTransfer() {
    const productId = parseInt(document.getElementById('transferProduct').value);
    const quantity = parseFloat(document.getElementById('transferQuantity').value);
    const fromWarehouseId = parseInt(document.getElementById('fromWarehouse').value);
    const toWarehouseId = parseInt(document.getElementById('toWarehouse').value);
    const notes = document.getElementById('transferNotes').value.trim();

    if (!productId || !quantity || !fromWarehouseId || !toWarehouseId || quantity <= 0) {
        alert('يرجى ملء جميع الحقول المطلوبة');
        return;
    }

    if (fromWarehouseId === toWarehouseId) {
        alert('لا يمكن التحويل إلى نفس المخزن');
        return;
    }

    // التحقق من توفر الكمية في المخزن المصدر
    const product = appData.products.find(p => p.id === productId);
    if (product && product.quantity < quantity) {
        alert(`الكمية المتاحة: ${product.quantity} ${product.unit}`);
        return;
    }

    // إضافة حركة إخراج من المخزن المصدر
    addInventoryMovement({
        productId: productId,
        warehouseId: fromWarehouseId,
        movementType: 'out',
        quantity: quantity,
        reference: 'تحويل مخزن',
        notes: `تحويل إلى ${appData.warehouses.find(w => w.id === toWarehouseId)?.name || 'مخزن آخر'} - ${notes}`
    });

    // إضافة حركة إدخال للمخزن المستهدف
    addInventoryMovement({
        productId: productId,
        warehouseId: toWarehouseId,
        movementType: 'in',
        quantity: quantity,
        reference: 'تحويل مخزن',
        notes: `تحويل من ${appData.warehouses.find(w => w.id === fromWarehouseId)?.name || 'مخزن آخر'} - ${notes}`
    });

    saveData();

    // إغلاق النافذة
    const modal = bootstrap.Modal.getInstance(document.getElementById('transferModal'));
    modal.hide();

    alert('تم تنفيذ التحويل بنجاح');
    showPage('inventory');
}

/**
 * صفحة إضافة مورد
 */
function getAddSupplierHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-truck-loading me-2"></i>
                        إضافة مورد جديد
                    </h1>
                    <button class="btn btn-outline-secondary" onclick="showPage('suppliers')">
                        <i class="fas fa-arrow-right me-2"></i>
                        العودة للقائمة
                    </button>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-truck me-2"></i>
                            بيانات المورد
                        </h5>
                    </div>
                    <div class="card-body">
                        <form id="addSupplierForm" onsubmit="addSupplier(event)">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="supplierName" class="form-label">
                                        <i class="fas fa-building me-1"></i>
                                        اسم المورد <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control" id="supplierName" required>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="supplierPhone" class="form-label">
                                        <i class="fas fa-phone me-1"></i>
                                        رقم الهاتف
                                    </label>
                                    <input type="tel" class="form-control" id="supplierPhone">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="supplierEmail" class="form-label">
                                        <i class="fas fa-envelope me-1"></i>
                                        البريد الإلكتروني
                                    </label>
                                    <input type="email" class="form-control" id="supplierEmail">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="supplierTaxNumber" class="form-label">
                                        <i class="fas fa-receipt me-1"></i>
                                        الرقم الضريبي
                                    </label>
                                    <input type="text" class="form-control" id="supplierTaxNumber">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="supplierAddress" class="form-label">
                                    <i class="fas fa-map-marker-alt me-1"></i>
                                    العنوان
                                </label>
                                <textarea class="form-control" id="supplierAddress" rows="3"></textarea>
                            </div>

                            <div class="row" ${appData.settings.enableMultiCurrency ? '' : 'style="display: none;"'}>
                                <div class="col-md-6 mb-3">
                                    <label for="supplierCurrency" class="form-label">
                                        <i class="fas fa-coins me-1"></i>
                                        العملة
                                    </label>
                                    <select class="form-select" id="supplierCurrency">
                                        <option value="${appData.settings.currency || 'SYP'}">${getCurrencySymbol(appData.settings.currency || 'SYP')} (العملة الأساسية)</option>
                                        ${appData.settings.enableMultiCurrency ? `
                                            <option value="USD">$ (الدولار الأمريكي)</option>
                                            <option value="EUR">€ (اليورو)</option>
                                            <option value="SAR">ر.س (الريال السعودي)</option>
                                            <option value="AED">د.إ (الدرهم الإماراتي)</option>
                                            <option value="EGP">ج.م (الجنيه المصري)</option>
                                            <option value="JOD">د.أ (الدينار الأردني)</option>
                                            <option value="LBP">ل.ل (الليرة اللبنانية)</option>
                                            <option value="TRY">₺ (الليرة التركية)</option>
                                            <option value="GBP">£ (الجنيه الإسترليني)</option>
                                        ` : ''}
                                    </select>
                                </div>
                            </div>

                            <div class="d-flex justify-content-end gap-2">
                                <button type="button" class="btn btn-secondary" onclick="showPage('suppliers')">
                                    <i class="fas fa-times me-2"></i>
                                    إلغاء
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-save me-2"></i>
                                    حفظ المورد
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة المخازن
 */
function getWarehousesHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-warehouse me-2"></i>
                        إدارة المخازن
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="showAddWarehouseModal()">
                            <i class="fas fa-plus me-2"></i>
                            إضافة مخزن جديد
                        </button>
                        <button class="btn btn-outline-success" onclick="printContent('warehouses', 'قائمة المخازن')">
                            <i class="fas fa-print me-2"></i>
                            طباعة القائمة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="table-light">
                            <tr>
                                <th>اسم المخزن</th>
                                <th>الموقع</th>
                                <th>المدير</th>
                                <th>الهاتف</th>
                                <th>عدد الأصناف</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${getWarehousesTableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Modal إضافة مخزن -->
        <div class="modal fade" id="addWarehouseModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">إضافة مخزن جديد</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="addWarehouseForm">
                            <div class="mb-3">
                                <label for="warehouseName" class="form-label">اسم المخزن <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="warehouseName" required>
                            </div>
                            <div class="mb-3">
                                <label for="warehouseLocation" class="form-label">الموقع</label>
                                <input type="text" class="form-control" id="warehouseLocation">
                            </div>
                            <div class="mb-3">
                                <label for="warehouseManager" class="form-label">المدير</label>
                                <input type="text" class="form-control" id="warehouseManager">
                            </div>
                            <div class="mb-3">
                                <label for="warehousePhone" class="form-label">الهاتف</label>
                                <input type="tel" class="form-control" id="warehousePhone">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                        <button type="button" class="btn btn-primary" onclick="addWarehouse()">حفظ المخزن</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة حركة المخزون
 */
function getInventoryHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-exchange-alt me-2"></i>
                        حركة المخزون
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-primary" onclick="showAddMovementModal()">
                            <i class="fas fa-plus me-2"></i>
                            إضافة حركة
                        </button>
                        <button class="btn btn-success" onclick="showTransferModal()">
                            <i class="fas fa-exchange-alt me-2"></i>
                            تحويل بين المخازن
                        </button>
                        <button class="btn btn-outline-success" onclick="printContent('inventory', 'تقرير حركة المخزون')">
                            <i class="fas fa-print me-2"></i>
                            طباعة التقرير
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                        <label class="form-label">نوع الحركة</label>
                        <select class="form-select" id="movementTypeFilter" onchange="applyInventoryMovementsFilter()">
                            <option value="">جميع الحركات</option>
                            <option value="in">إدخال</option>
                            <option value="out">إخراج</option>
                            <option value="transfer">تحويل</option>
                            <option value="adjustment">تسوية</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">الصنف</label>
                        <select class="form-select" id="productFilter" onchange="applyInventoryMovementsFilter()">
                            <option value="">جميع الأصناف</option>
                            ${appData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">المخزن</label>
                        <select class="form-select" id="warehouseFilter" onchange="applyInventoryMovementsFilter()">
                            <option value="">جميع المخازن</option>
                            ${appData.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">من تاريخ</label>
                        <input type="date" class="form-control" id="fromDate" onchange="applyInventoryMovementsFilter()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">إلى تاريخ</label>
                        <input type="date" class="form-control" id="toDate" onchange="applyInventoryMovementsFilter()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">بحث</label>
                        <input type="text" class="form-control" id="movementSearch" placeholder="المرجع أو الملاحظات" onkeyup="applyInventoryMovementsFilter()">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-outline-primary" onclick="applyInventoryMovementsFilter()">
                            <i class="fas fa-search me-2"></i>
                            تطبيق الفلتر
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearInventoryMovementsFilter()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول الحركات -->
        <div class="card shadow">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="table-light">
                            <tr>
                                <th>التاريخ</th>
                                <th>نوع الحركة</th>
                                <th>الصنف</th>
                                <th>المخزن</th>
                                <th>الكمية</th>
                                <th>سعر الوحدة</th>
                                <th>المجموع</th>
                                <th>المرجع</th>
                                <th>ملاحظات</th>
                            </tr>
                        </thead>
                        <tbody id="inventoryMovementsTable">
                            ${getInventoryMovementsRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة إنشاء فاتورة
 */
function getCreateInvoiceHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <h1 class="h3 mb-4">
                    <i class="fas fa-file-invoice-dollar me-2"></i>
                    إنشاء فاتورة جديدة
                </h1>
            </div>
        </div>

        <div class="card shadow">
            <div class="card-body">
                <form id="createInvoiceForm" onsubmit="createInvoice(event)">
                    <!-- معلومات الفاتورة الأساسية -->
                    <div class="row mb-4">
                        <div class="col-md-3">
                            <label for="invoiceType" class="form-label">نوع الفاتورة <span class="text-danger">*</span></label>
                            <select class="form-select" id="invoiceType" required onchange="updateClientOptions()">
                                <option value="">اختر نوع الفاتورة</option>
                                <option value="sale">فاتورة مبيعات</option>
                                <option value="purchase">فاتورة مشتريات</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="invoiceNumber" class="form-label">رقم الفاتورة</label>
                            <input type="text" class="form-control" id="invoiceNumber" readonly>
                        </div>
                        <div class="col-md-3">
                            <label for="invoiceDate" class="form-label">تاريخ الفاتورة <span class="text-danger">*</span></label>
                            <input type="date" class="form-control" id="invoiceDate" required>
                        </div>
                        <div class="col-md-3">
                            <label for="dueDate" class="form-label">تاريخ الاستحقاق</label>
                            <input type="date" class="form-control" id="dueDate">
                        </div>
                    </div>

                    <!-- العميل/المورد -->
                    <div class="row mb-4">
                        <div class="col-md-6">
                            <label for="clientSelect" class="form-label">
                                <span id="clientLabel">العميل/المورد</span> <span class="text-danger">*</span>
                            </label>
                            <select class="form-select" id="clientSelect" required>
                                <option value="">اختر العميل/المورد</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">معلومات إضافية</label>
                            <div id="clientInfo" class="form-control-plaintext text-muted">
                                اختر العميل/المورد لعرض المعلومات
                            </div>
                        </div>
                    </div>

                    <!-- عناصر الفاتورة -->
                    <div class="mb-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5>عناصر الفاتورة</h5>
                            <button type="button" class="btn btn-success" onclick="addInvoiceItem()">
                                <i class="fas fa-plus me-2"></i>
                                إضافة صنف
                            </button>
                        </div>

                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="table-light">
                                    <tr>
                                        <th style="width: 30%">الصنف</th>
                                        <th style="width: 15%">الكمية</th>
                                        <th style="width: 15%">سعر الوحدة</th>
                                        <th style="width: 10%">خصم %</th>
                                        <th style="width: 15%">المجموع</th>
                                        <th style="width: 10%">إجراءات</th>
                                    </tr>
                                </thead>
                                <tbody id="invoiceItemsTable">
                                    <!-- سيتم إضافة العناصر هنا -->
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- إجماليات الفاتورة -->
                    <div class="row">
                        <div class="col-md-8"></div>
                        <div class="col-md-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>المجموع الفرعي:</span>
                                        <span id="subtotalAmount">0.00 ل.س</span>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>الخصم:</span>
                                        <div class="input-group input-group-sm">
                                            <input type="number" class="form-control" id="discountPercentage"
                                                   min="0" max="100" step="0.01" value="0" onchange="calculateInvoiceTotals()">
                                            <span class="input-group-text">%</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>مبلغ الخصم:</span>
                                        <span id="discountAmount">0.00 ل.س</span>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>الضريبة:</span>
                                        <div class="input-group input-group-sm">
                                            <input type="number" class="form-control" id="taxPercentage"
                                                   min="0" max="100" step="0.01" value="0" onchange="calculateInvoiceTotals()">
                                            <span class="input-group-text">%</span>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>مبلغ الضريبة:</span>
                                        <span id="taxAmount">0.00 ل.س</span>
                                    </div>
                                    <hr>
                                    <div class="d-flex justify-content-between">
                                        <strong>المجموع النهائي:</strong>
                                        <strong id="totalAmount">0.00 ل.س</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ملاحظات -->
                    <div class="row mt-4">
                        <div class="col-12">
                            <label for="invoiceNotes" class="form-label">ملاحظات</label>
                            <textarea class="form-control" id="invoiceNotes" rows="3"></textarea>
                        </div>
                    </div>

                    <!-- أزرار الحفظ -->
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <button type="button" class="btn btn-outline-warning" onclick="fixInvoiceSaving()">
                                <i class="fas fa-tools me-2"></i>
                                إصلاح مشكلة الحفظ
                            </button>
                            <button type="button" class="btn btn-outline-info" onclick="testInvoiceSave()">
                                <i class="fas fa-vial me-2"></i>
                                اختبار النظام
                            </button>
                            <button type="button" class="btn btn-outline-success" onclick="quickTest()">
                                <i class="fas fa-rocket me-2"></i>
                                اختبار سريع
                            </button>
                        </div>
                        <div class="d-flex gap-2">
                            <button type="button" class="btn btn-secondary" onclick="showPage('dashboard')">
                                <i class="fas fa-times me-2"></i>
                                إلغاء
                            </button>
                            <button type="button" class="btn btn-outline-primary" onclick="saveInvoiceAsDraft()">
                                <i class="fas fa-save me-2"></i>
                                حفظ كمسودة
                            </button>
                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-check me-2"></i>
                                حفظ وتأكيد
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `;
}

/**
 * صفحة فواتير المبيعات
 */
function getSalesInvoicesHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-file-invoice me-2"></i>
                        فواتير المبيعات
                    </h1>
                    <div>
                        <button class="btn btn-outline-info me-2" onclick="advancedPrint('invoice')">
                            <i class="fas fa-print me-2"></i>
                            طباعة متقدمة
                        </button>
                        <button class="btn btn-primary" onclick="showPage('create-invoice')">
                            <i class="fas fa-plus me-2"></i>
                            إنشاء فاتورة مبيعات
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label">العميل</label>
                        <select class="form-select" id="customerFilter" onchange="applySalesInvoicesFilter()">
                            <option value="">جميع العملاء</option>
                            ${appData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">الحالة</label>
                        <select class="form-select" id="statusFilter" onchange="applySalesInvoicesFilter()">
                            <option value="">جميع الحالات</option>
                            <option value="draft">مسودة</option>
                            <option value="confirmed">مؤكدة</option>
                            <option value="paid">مدفوعة</option>
                            <option value="cancelled">ملغية</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">من تاريخ</label>
                        <input type="date" class="form-control" id="salesFromDate" onchange="applySalesInvoicesFilter()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">إلى تاريخ</label>
                        <input type="date" class="form-control" id="salesToDate" onchange="applySalesInvoicesFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">بحث</label>
                        <input type="text" class="form-control" id="salesSearch" placeholder="رقم الفاتورة أو اسم العميل" onkeyup="applySalesInvoicesFilter()">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-outline-primary" onclick="applySalesInvoicesFilter()">
                            <i class="fas fa-search me-2"></i>
                            تطبيق الفلتر
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearSalesInvoicesFilter()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول الفواتير -->
        <div class="card shadow">
            <div class="card-body" id="salesInvoicesTableContainer">
                <!-- سيتم تحميل الجدول هنا -->
            </div>
        </div>

        <script>
            // تحميل جميع فواتير المبيعات عند عرض الصفحة
            setTimeout(() => {
                const salesInvoices = appData.invoices.filter(inv => inv.invoiceType === 'sale');
                updateSalesInvoicesTable(salesInvoices);
            }, 100);
        </script>
    `;
}

/**
 * صفحة فواتير المشتريات
 */
function getPurchaseInvoicesHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-shopping-cart me-2"></i>
                        فواتير المشتريات
                    </h1>
                    <button class="btn btn-primary" onclick="showPage('create-invoice')">
                        <i class="fas fa-plus me-2"></i>
                        إنشاء فاتورة مشتريات
                    </button>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label">المورد</label>
                        <select class="form-select" id="supplierFilter" onchange="applyPurchaseInvoicesFilter()">
                            <option value="">جميع الموردين</option>
                            ${appData.suppliers.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">الحالة</label>
                        <select class="form-select" id="purchaseStatusFilter" onchange="applyPurchaseInvoicesFilter()">
                            <option value="">جميع الحالات</option>
                            <option value="draft">مسودة</option>
                            <option value="confirmed">مؤكدة</option>
                            <option value="paid">مدفوعة</option>
                            <option value="cancelled">ملغية</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">من تاريخ</label>
                        <input type="date" class="form-control" id="purchaseFromDate" onchange="applyPurchaseInvoicesFilter()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">إلى تاريخ</label>
                        <input type="date" class="form-control" id="purchaseToDate" onchange="applyPurchaseInvoicesFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">بحث</label>
                        <input type="text" class="form-control" id="purchaseSearch" placeholder="رقم الفاتورة أو اسم المورد" onkeyup="applyPurchaseInvoicesFilter()">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-outline-primary" onclick="applyPurchaseInvoicesFilter()">
                            <i class="fas fa-search me-2"></i>
                            تطبيق الفلتر
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearPurchaseInvoicesFilter()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول الفواتير -->
        <div class="card shadow">
            <div class="card-body" id="purchaseInvoicesTableContainer">
                <!-- سيتم تحميل الجدول هنا -->
            </div>
        </div>

        <script>
            // تحميل جميع فواتير المشتريات عند عرض الصفحة
            setTimeout(() => {
                const purchaseInvoices = appData.invoices.filter(inv => inv.invoiceType === 'purchase');
                updatePurchaseInvoicesTable(purchaseInvoices);
            }, 100);
        </script>
    `;
}

/**
 * صفحة سندات القبض
 */
function getReceiptsHTML() {
    const receipts = appData.payments.filter(p => p.paymentType === 'receipt');

    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-hand-holding-usd me-2"></i>
                        سندات القبض
                    </h1>
                    <button class="btn btn-primary" onclick="showAddReceiptModal()">
                        <i class="fas fa-plus me-2"></i>
                        إنشاء سند قبض
                    </button>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label">العميل</label>
                        <select class="form-select" id="receiptCustomerFilter" onchange="applyReceiptsFilter()">
                            <option value="">جميع العملاء</option>
                            ${appData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">طريقة الدفع</label>
                        <select class="form-select" id="receiptMethodFilter" onchange="applyReceiptsFilter()">
                            <option value="">جميع الطرق</option>
                            <option value="cash">نقدي</option>
                            <option value="bank">تحويل بنكي</option>
                            <option value="check">شيك</option>
                            <option value="card">بطاقة ائتمان</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">من تاريخ</label>
                        <input type="date" class="form-control" id="receiptFromDate" onchange="applyReceiptsFilter()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">إلى تاريخ</label>
                        <input type="date" class="form-control" id="receiptToDate" onchange="applyReceiptsFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">بحث</label>
                        <input type="text" class="form-control" id="receiptSearch" placeholder="رقم السند أو اسم العميل" onkeyup="applyReceiptsFilter()">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-outline-primary" onclick="applyReceiptsFilter()">
                            <i class="fas fa-search me-2"></i>
                            تطبيق الفلتر
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearReceiptsFilter()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول سندات القبض -->
        <div class="card shadow">
            <div class="card-body">
                ${receipts.length > 0 ? `
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>رقم السند</th>
                                    <th>العميل</th>
                                    <th>التاريخ</th>
                                    <th>المبلغ</th>
                                    <th>طريقة الدفع</th>
                                    <th>رقم المرجع</th>
                                    <th>الحالة</th>
                                    <th>الإجراءات</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${getReceiptsRows(receipts)}
                            </tbody>
                        </table>
                    </div>
                ` : `
                    <div class="text-center py-5">
                        <i class="fas fa-hand-holding-usd fa-3x text-muted mb-3"></i>
                        <h5 class="text-muted">لا توجد سندات قبض</h5>
                        <p class="text-muted">ابدأ بإنشاء سند قبض جديد</p>
                        <button class="btn btn-primary" onclick="showAddReceiptModal()">
                            <i class="fas fa-plus me-2"></i>
                            إنشاء سند قبض
                        </button>
                    </div>
                `}
            </div>
        </div>

        <!-- Modal إضافة سند قبض -->
        <div class="modal fade" id="addReceiptModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">إنشاء سند قبض جديد</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="addReceiptForm">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="receiptNumber" class="form-label">رقم السند</label>
                                    <input type="text" class="form-control" id="receiptNumber" readonly>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="receiptDate" class="form-label">التاريخ <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" id="receiptDate" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="receiptCustomer" class="form-label">العميل <span class="text-danger">*</span></label>
                                    <select class="form-select" id="receiptCustomer" required>
                                        <option value="">اختر العميل</option>
                                        ${appData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="receiptAmount" class="form-label">المبلغ <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" id="receiptAmount" min="0" step="0.01" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="receiptMethod" class="form-label">طريقة الدفع <span class="text-danger">*</span></label>
                                    <select class="form-select" id="receiptMethod" required>
                                        <option value="">اختر طريقة الدفع</option>
                                        <option value="cash">نقدي</option>
                                        <option value="bank">تحويل بنكي</option>
                                        <option value="check">شيك</option>
                                        <option value="card">بطاقة ائتمان</option>
                                    </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="receiptReference" class="form-label">رقم المرجع</label>
                                    <input type="text" class="form-control" id="receiptReference" placeholder="رقم الشيك أو الحوالة">
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="receiptBankName" class="form-label">اسم البنك</label>
                                <input type="text" class="form-control" id="receiptBankName">
                            </div>
                            <div class="mb-3">
                                <label for="receiptNotes" class="form-label">ملاحظات</label>
                                <textarea class="form-control" id="receiptNotes" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إلغاء</button>
                        <button type="button" class="btn btn-primary" onclick="addReceipt()">حفظ السند</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة سندات الدفع
 */
function getPaymentsHTML() {
    const payments = appData.payments.filter(p => p.paymentType === 'payment');

    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-money-bill-wave me-2"></i>
                        سندات الدفع
                    </h1>
                    <button class="btn btn-primary" onclick="showAddPaymentModal()">
                        <i class="fas fa-plus me-2"></i>
                        إنشاء سند دفع
                    </button>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label">المورد</label>
                        <select class="form-select" id="paymentSupplierFilter" onchange="applyPaymentsFilter()">
                            <option value="">جميع الموردين</option>
                            ${appData.suppliers.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">طريقة الدفع</label>
                        <select class="form-select" id="paymentMethodFilter" onchange="applyPaymentsFilter()">
                            <option value="">جميع الطرق</option>
                            <option value="cash">نقدي</option>
                            <option value="bank">تحويل بنكي</option>
                            <option value="check">شيك</option>
                            <option value="card">بطاقة ائتمان</option>
                        </select>
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">من تاريخ</label>
                        <input type="date" class="form-control" id="paymentFromDate" onchange="applyPaymentsFilter()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">إلى تاريخ</label>
                        <input type="date" class="form-control" id="paymentToDate" onchange="applyPaymentsFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">بحث</label>
                        <input type="text" class="form-control" id="paymentSearch" placeholder="رقم السند أو اسم المورد" onkeyup="applyPaymentsFilter()">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-outline-primary" onclick="applyPaymentsFilter()">
                            <i class="fas fa-search me-2"></i>
                            تطبيق الفلتر
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearPaymentsFilter()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول سندات الدفع -->
        <div class="card shadow">
            <div class="card-body">
                ${payments.length > 0 ? `
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>رقم السند</th>
                                    <th>المورد</th>
                                    <th>التاريخ</th>
                                    <th>المبلغ</th>
                                    <th>طريقة الدفع</th>
                                    <th>رقم المرجع</th>
                                    <th>الحالة</th>
                                    <th>الإجراءات</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${getPaymentsRows(payments)}
                            </tbody>
                        </table>
                    </div>
                ` : `
                    <div class="text-center py-5">
                        <i class="fas fa-money-bill-wave fa-3x text-muted mb-3"></i>
                        <h5 class="text-muted">لا توجد سندات دفع</h5>
                        <p class="text-muted">ابدأ بإنشاء سند دفع جديد</p>
                        <button class="btn btn-primary" onclick="showAddPaymentModal()">
                            <i class="fas fa-plus me-2"></i>
                            إنشاء سند دفع
                        </button>
                    </div>
                `}
            </div>
        </div>
    `;
}

/**
 * صفحة دفتر اليومية
 */
function getJournalHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-book me-2"></i>
                        دفتر اليومية العامة
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary" onclick="exportJournal('pdf')">
                            <i class="fas fa-file-pdf me-2"></i>
                            تصدير PDF
                        </button>
                        <button class="btn btn-outline-success" onclick="exportJournal('excel')">
                            <i class="fas fa-file-excel me-2"></i>
                            تصدير Excel
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر البحث -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label class="form-label">نوع العملية</label>
                        <select class="form-select" id="journalTypeFilter" onchange="applyJournalFilter()">
                            <option value="">جميع العمليات</option>
                            <option value="invoice">فواتير</option>
                            <option value="payment">مدفوعات</option>
                            <option value="adjustment">تسويات</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">من تاريخ</label>
                        <input type="date" class="form-control" id="journalFromDate" onchange="applyJournalFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">إلى تاريخ</label>
                        <input type="date" class="form-control" id="journalToDate" onchange="applyJournalFilter()">
                    </div>
                    <div class="col-md-3">
                        <label class="form-label">بحث</label>
                        <input type="text" class="form-control" id="journalSearch" placeholder="البحث في الوصف" onkeyup="applyJournalFilter()">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-outline-primary" onclick="applyJournalFilter()">
                            <i class="fas fa-search me-2"></i>
                            تطبيق الفلتر
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearJournalFilter()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- جدول دفتر اليومية -->
        <div class="card shadow">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-hover">
                        <thead class="table-light">
                            <tr>
                                <th>التاريخ</th>
                                <th>نوع العملية</th>
                                <th>الوصف</th>
                                <th>الحساب المدين</th>
                                <th>الحساب الدائن</th>
                                <th>المبلغ المدين</th>
                                <th>المبلغ الدائن</th>
                                <th>المرجع</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${getJournalEntriesRows()}
                        </tbody>
                        <tfoot class="table-light">
                            <tr>
                                <th colspan="5">الإجمالي</th>
                                <th id="totalDebit">0.00 ل.س</th>
                                <th id="totalCredit">0.00 ل.س</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة كشف حساب العميل
 */
function getCustomerStatementHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-user-check me-2"></i>
                        كشف حساب العميل
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary" onclick="exportStatement('pdf')">
                            <i class="fas fa-file-pdf me-2"></i>
                            تصدير PDF
                        </button>
                        <button class="btn btn-outline-success" onclick="printStatement()">
                            <i class="fas fa-print me-2"></i>
                            طباعة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- اختيار العميل والفترة -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <label for="statementCustomer" class="form-label">العميل <span class="text-danger">*</span></label>
                        <select class="form-select" id="statementCustomer" onchange="loadCustomerStatement()">
                            <option value="">اختر العميل</option>
                            ${appData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="statementFromDate" class="form-label">من تاريخ</label>
                        <input type="date" class="form-control" id="statementFromDate" onchange="loadCustomerStatement()">
                    </div>
                    <div class="col-md-3">
                        <label for="statementToDate" class="form-label">إلى تاريخ</label>
                        <input type="date" class="form-control" id="statementToDate" onchange="loadCustomerStatement()">
                    </div>
                    <div class="col-md-2">
                        <label class="form-label">&nbsp;</label>
                        <div class="d-grid">
                            <button class="btn btn-primary" onclick="loadCustomerStatement()">
                                <i class="fas fa-search me-2"></i>
                                عرض
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- معلومات العميل -->
        <div id="customerInfo" style="display: none;">
            <div class="card shadow mb-4">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-6">
                            <h5 id="customerName"></h5>
                            <p class="mb-1" id="customerAddress"></p>
                            <p class="mb-1" id="customerPhone"></p>
                            <p class="mb-0" id="customerEmail"></p>
                        </div>
                        <div class="col-md-6 text-end">
                            <div class="row">
                                <div class="col-6">
                                    <div class="border p-3 rounded">
                                        <h6 class="text-muted mb-1">الرصيد السابق</h6>
                                        <h4 id="previousBalance" class="mb-0">0.00 ل.س</h4>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="border p-3 rounded">
                                        <h6 class="text-muted mb-1">الرصيد الحالي</h6>
                                        <h4 id="currentBalance" class="mb-0">0.00 ل.س</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- جدول كشف الحساب -->
            <div class="card shadow">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">تفاصيل الحساب</h5>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary btn-sm" onclick="printStatement()">
                            <i class="fas fa-print me-2"></i>
                            طباعة
                        </button>
                        <button class="btn btn-outline-success btn-sm" onclick="exportStatement('excel')">
                            <i class="fas fa-file-excel me-2"></i>
                            تصدير
                        </button>
                    </div>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>التاريخ</th>
                                    <th>البيان</th>
                                    <th>رقم المرجع</th>
                                    <th>مدين</th>
                                    <th>دائن</th>
                                    <th>الرصيد</th>
                                </tr>
                            </thead>
                            <tbody id="statementTable">
                                <!-- سيتم تحميل البيانات هنا -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- رسالة عدم اختيار عميل -->
        <div id="noCustomerSelected" class="text-center py-5">
            <i class="fas fa-user-check fa-3x text-muted mb-3"></i>
            <h5 class="text-muted">اختر عميلاً لعرض كشف الحساب</h5>
            <p class="text-muted">يمكنك أيضاً تحديد فترة زمنية معينة</p>
        </div>
    `;
}

/**
 * صفحة تقرير المبيعات
 */
function getSalesReportHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-chart-line me-2"></i>
                        تقرير المبيعات
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary" onclick="exportSalesReport('pdf')">
                            <i class="fas fa-file-pdf me-2"></i>
                            تصدير PDF
                        </button>
                        <button class="btn btn-outline-success" onclick="exportSalesReport('excel')">
                            <i class="fas fa-file-excel me-2"></i>
                            تصدير Excel
                        </button>
                        <button class="btn btn-outline-info" onclick="exportSalesReport('print')">
                            <i class="fas fa-print me-2"></i>
                            طباعة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر التقرير -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label for="salesReportFromDate" class="form-label">من تاريخ <span class="text-danger">*</span></label>
                        <input type="date" class="form-control" id="salesReportFromDate" required>
                    </div>
                    <div class="col-md-3">
                        <label for="salesReportToDate" class="form-label">إلى تاريخ <span class="text-danger">*</span></label>
                        <input type="date" class="form-control" id="salesReportToDate" required>
                    </div>
                    <div class="col-md-3">
                        <label for="salesReportCustomer" class="form-label">العميل</label>
                        <select class="form-select" id="salesReportCustomer">
                            <option value="">جميع العملاء</option>
                            ${appData.customers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="salesReportProduct" class="form-label">الصنف</label>
                        <select class="form-select" id="salesReportProduct">
                            <option value="">جميع الأصناف</option>
                            ${appData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-primary" onclick="generateSalesReport()">
                            <i class="fas fa-chart-bar me-2"></i>
                            إنشاء التقرير
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearSalesReportFilters()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- ملخص التقرير -->
        <div id="salesReportSummary" style="display: none;">
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="card border-right-primary shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">إجمالي المبيعات</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="totalSalesAmount">0.00 ل.س</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-right-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">عدد الفواتير</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="totalInvoicesCount">0</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-file-invoice fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-right-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">متوسط الفاتورة</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="averageInvoiceAmount">0.00 ل.س</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-calculator fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-right-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">المبلغ المعلق</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="pendingSalesAmount">0.00 ل.س</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-clock fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- جدول تفاصيل المبيعات -->
            <div class="card shadow">
                <div class="card-header">
                    <h5 class="mb-0">تفاصيل المبيعات</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>رقم الفاتورة</th>
                                    <th>التاريخ</th>
                                    <th>العميل</th>
                                    <th>المبلغ الإجمالي</th>
                                    <th>المدفوع</th>
                                    <th>المتبقي</th>
                                    <th>الحالة</th>
                                </tr>
                            </thead>
                            <tbody id="salesReportTable">
                                <!-- سيتم تحميل البيانات هنا -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- رسالة عدم وجود بيانات -->
        <div id="noSalesData" class="text-center py-5">
            <i class="fas fa-chart-line fa-3x text-muted mb-3"></i>
            <h5 class="text-muted">حدد الفترة الزمنية لإنشاء تقرير المبيعات</h5>
            <p class="text-muted">يمكنك أيضاً تصفية النتائج حسب العميل أو الصنف</p>
        </div>
    `;
}

/**
 * صفحة تقرير المشتريات
 */
function getPurchaseReportHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-shopping-cart me-2"></i>
                        تقرير المشتريات
                    </h1>
                    <div class="btn-group">
                        <button class="btn btn-outline-primary" onclick="exportPurchaseReport('pdf')">
                            <i class="fas fa-file-pdf me-2"></i>
                            تصدير PDF
                        </button>
                        <button class="btn btn-outline-success" onclick="exportPurchaseReport('excel')">
                            <i class="fas fa-file-excel me-2"></i>
                            تصدير Excel
                        </button>
                        <button class="btn btn-outline-info" onclick="exportPurchaseReport('print')">
                            <i class="fas fa-print me-2"></i>
                            طباعة
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- فلاتر التقرير -->
        <div class="card shadow mb-4">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <label for="purchaseReportFromDate" class="form-label">من تاريخ <span class="text-danger">*</span></label>
                        <input type="date" class="form-control" id="purchaseReportFromDate" required>
                    </div>
                    <div class="col-md-3">
                        <label for="purchaseReportToDate" class="form-label">إلى تاريخ <span class="text-danger">*</span></label>
                        <input type="date" class="form-control" id="purchaseReportToDate" required>
                    </div>
                    <div class="col-md-3">
                        <label for="purchaseReportSupplier" class="form-label">المورد</label>
                        <select class="form-select" id="purchaseReportSupplier">
                            <option value="">جميع الموردين</option>
                            ${appData.suppliers.map(s => `<option value="${s.id}">${s.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="purchaseReportProduct" class="form-label">الصنف</label>
                        <select class="form-select" id="purchaseReportProduct">
                            <option value="">جميع الأصناف</option>
                            ${appData.products.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}
                        </select>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <button class="btn btn-primary" onclick="generatePurchaseReport()">
                            <i class="fas fa-chart-bar me-2"></i>
                            إنشاء التقرير
                        </button>
                        <button class="btn btn-outline-secondary" onclick="clearPurchaseReportFilters()">
                            <i class="fas fa-times me-2"></i>
                            مسح الفلاتر
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- ملخص التقرير -->
        <div id="purchaseReportSummary" style="display: none;">
            <div class="row mb-4">
                <div class="col-md-3">
                    <div class="card border-right-danger shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">إجمالي المشتريات</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="totalPurchaseAmount">0.00 ل.س</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-shopping-cart fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-right-info shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">عدد الفواتير</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="totalPurchaseInvoicesCount">0</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-file-invoice fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-right-success shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">متوسط الفاتورة</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="averagePurchaseAmount">0.00 ل.س</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-calculator fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card border-right-warning shadow h-100 py-2">
                        <div class="card-body">
                            <div class="row no-gutters align-items-center">
                                <div class="col me-2">
                                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">المبلغ المعلق</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800" id="pendingPurchaseAmount">0.00 ل.س</div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-clock fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- جدول تفاصيل المشتريات -->
            <div class="card shadow">
                <div class="card-header">
                    <h5 class="mb-0">تفاصيل المشتريات</h5>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>رقم الفاتورة</th>
                                    <th>التاريخ</th>
                                    <th>المورد</th>
                                    <th>المبلغ الإجمالي</th>
                                    <th>المدفوع</th>
                                    <th>المتبقي</th>
                                    <th>الحالة</th>
                                </tr>
                            </thead>
                            <tbody id="purchaseReportTable">
                                <!-- سيتم تحميل البيانات هنا -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- رسالة عدم وجود بيانات -->
        <div id="noPurchaseData" class="text-center py-5">
            <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
            <h5 class="text-muted">حدد الفترة الزمنية لإنشاء تقرير المشتريات</h5>
            <p class="text-muted">يمكنك أيضاً تصفية النتائج حسب المورد أو الصنف</p>
        </div>
    `;
}

/**
 * صفحة إضافة منتج
 */
function getAddProductHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="h3">
                        <i class="fas fa-box-open me-2"></i>
                        إضافة منتج جديد
                    </h1>
                    <button class="btn btn-outline-secondary" onclick="showPage('products')">
                        <i class="fas fa-arrow-right me-2"></i>
                        العودة للقائمة
                    </button>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-box me-2"></i>
                            بيانات المنتج
                        </h5>
                    </div>
                    <div class="card-body">
                        <form id="addProductForm" onsubmit="addNewProduct(event)">
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="productCode" class="form-label">
                                        <i class="fas fa-barcode me-1"></i>
                                        كود المنتج <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control" id="productCode" required>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="productName" class="form-label">
                                        <i class="fas fa-tag me-1"></i>
                                        اسم المنتج <span class="text-danger">*</span>
                                    </label>
                                    <input type="text" class="form-control" id="productName" required>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="productDescription" class="form-label">
                                    <i class="fas fa-align-left me-1"></i>
                                    الوصف
                                </label>
                                <textarea class="form-control" id="productDescription" rows="3"></textarea>
                            </div>

                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label for="productUnit" class="form-label">
                                        <i class="fas fa-weight me-1"></i>
                                        الوحدة <span class="text-danger">*</span>
                                    </label>
                                    <select class="form-select" id="productUnit" required>
                                        <option value="">اختر الوحدة</option>
                                        <option value="قطعة">قطعة</option>
                                        <option value="كيلو">كيلو</option>
                                        <option value="متر">متر</option>
                                        <option value="لتر">لتر</option>
                                        <option value="علبة">علبة</option>
                                        <option value="كرتون">كرتون</option>
                                        <option value="طن">طن</option>
                                    </select>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="productCategory" class="form-label">
                                        <i class="fas fa-list me-1"></i>
                                        الفئة
                                    </label>
                                    <select class="form-select" id="productCategory">
                                        <option value="">اختر الفئة</option>
                                        <option value="إلكترونيات">إلكترونيات</option>
                                        <option value="إكسسوارات">إكسسوارات</option>
                                        <option value="أجهزة">أجهزة</option>
                                        <option value="قطع غيار">قطع غيار</option>
                                        <option value="مواد غذائية">مواد غذائية</option>
                                        <option value="ملابس">ملابس</option>
                                        <option value="أخرى">أخرى</option>
                                    </select>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="productWarehouse" class="form-label">
                                        <i class="fas fa-warehouse me-1"></i>
                                        المخزن <span class="text-danger">*</span>
                                    </label>
                                    <select class="form-select" id="productWarehouse" required>
                                        <option value="">اختر المخزن</option>
                                        ${appData.warehouses.map(w => `<option value="${w.id}">${w.name}</option>`).join('')}
                                    </select>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="productCostPrice" class="form-label">
                                        <i class="fas fa-dollar-sign me-1"></i>
                                        سعر التكلفة (ل.س) <span class="text-danger">*</span>
                                    </label>
                                    <input type="number" class="form-control" id="productCostPrice" min="0" step="0.01" required>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="productSellingPrice" class="form-label">
                                        <i class="fas fa-money-bill me-1"></i>
                                        سعر البيع (ل.س) <span class="text-danger">*</span>
                                    </label>
                                    <input type="number" class="form-control" id="productSellingPrice" min="0" step="0.01" required>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="productQuantity" class="form-label">
                                        <i class="fas fa-cubes me-1"></i>
                                        الكمية الحالية <span class="text-danger">*</span>
                                    </label>
                                    <input type="number" class="form-control" id="productQuantity" min="0" step="0.01" required>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="productMinQuantity" class="form-label">
                                        <i class="fas fa-exclamation-triangle me-1"></i>
                                        الحد الأدنى للكمية <span class="text-danger">*</span>
                                    </label>
                                    <input type="number" class="form-control" id="productMinQuantity" min="0" step="0.01" required>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="productBarcode" class="form-label">
                                    <i class="fas fa-qrcode me-1"></i>
                                    الباركود
                                </label>
                                <input type="text" class="form-control" id="productBarcode">
                            </div>

                            <div class="d-flex justify-content-end gap-2">
                                <button type="button" class="btn btn-secondary" onclick="showPage('products')">
                                    <i class="fas fa-times me-2"></i>
                                    إلغاء
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-save me-2"></i>
                                    حفظ المنتج
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة تسجيل الدخول
 */
function getLoginHTML() {
    return `
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card shadow-lg">
                    <div class="card-body p-5">
                        <div class="text-center mb-4">
                            <i class="fas fa-calculator fa-3x text-primary mb-3"></i>
                            <h3>برنامج المحاسب الذكي</h3>
                            <h5 class="text-muted">SAM PRO</h5>
                        </div>

                        <form id="loginForm" onsubmit="login(event)">
                            <div class="mb-3">
                                <label for="loginPassword" class="form-label">
                                    <i class="fas fa-lock me-1"></i>
                                    كلمة المرور
                                </label>
                                <input type="password" class="form-control" id="loginPassword" required>
                            </div>

                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-sign-in-alt me-2"></i>
                                    تسجيل الدخول
                                </button>
                            </div>
                        </form>

                        <div class="text-center mt-4">
                            <small class="text-muted">
                                كلمة المرور الافتراضية: <strong>123</strong><br>
                                يمكن تغييرها من الإعدادات
                            </small>
                        </div>

                        <div class="text-center mt-4">
                            <small class="text-muted">
                                تطوير: <strong>MOHANNAD AHMAD</strong><br>
                                هاتف: +963-998-171-954
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * صفحة الإعدادات
 */
function getSettingsHTML() {
    const settings = appData.settings;
    return `
        <div class="row">
            <div class="col-12">
                <h1 class="h3 mb-4">
                    <i class="fas fa-cog me-2"></i>
                    إعدادات النظام
                </h1>
            </div>
        </div>

        <div class="row">
            <!-- إعدادات الشركة -->
            <div class="col-lg-6 mb-4">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-building me-2"></i>
                            معلومات الشركة
                        </h5>
                    </div>
                    <div class="card-body">
                        <form id="companySettingsForm" onsubmit="saveCompanySettings(event)">
                            <div class="mb-3">
                                <label for="companyName" class="form-label">اسم الشركة</label>
                                <input type="text" class="form-control" id="companyName" value="${settings.companyName || ''}">
                            </div>

                            <div class="mb-3">
                                <label for="companyAddress" class="form-label">عنوان الشركة</label>
                                <textarea class="form-control" id="companyAddress" rows="3">${settings.companyAddress || ''}</textarea>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="companyPhone" class="form-label">هاتف الشركة</label>
                                    <input type="tel" class="form-control" id="companyPhone" value="${settings.companyPhone || ''}">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="companyEmail" class="form-label">بريد الشركة</label>
                                    <input type="email" class="form-control" id="companyEmail" value="${settings.companyEmail || ''}">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="taxNumber" class="form-label">الرقم الضريبي</label>
                                    <input type="text" class="form-control" id="taxNumber" value="${settings.taxNumber || ''}">
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="currency" class="form-label">العملة الأساسية</label>
                                    <select class="form-select" id="currency" onchange="updateCurrencySymbol()">
                                        <option value="SYP" ${settings.currency === 'SYP' ? 'selected' : ''}>الليرة السورية (ل.س)</option>
                                        <option value="USD" ${settings.currency === 'USD' ? 'selected' : ''}>الدولار الأمريكي ($)</option>
                                        <option value="EUR" ${settings.currency === 'EUR' ? 'selected' : ''}>اليورو (€)</option>
                                        <option value="SAR" ${settings.currency === 'SAR' ? 'selected' : ''}>الريال السعودي (ر.س)</option>
                                        <option value="AED" ${settings.currency === 'AED' ? 'selected' : ''}>الدرهم الإماراتي (د.إ)</option>
                                        <option value="EGP" ${settings.currency === 'EGP' ? 'selected' : ''}>الجنيه المصري (ج.م)</option>
                                        <option value="JOD" ${settings.currency === 'JOD' ? 'selected' : ''}>الدينار الأردني (د.أ)</option>
                                        <option value="LBP" ${settings.currency === 'LBP' ? 'selected' : ''}>الليرة اللبنانية (ل.ل)</option>
                                        <option value="TRY" ${settings.currency === 'TRY' ? 'selected' : ''}>الليرة التركية (₺)</option>
                                        <option value="GBP" ${settings.currency === 'GBP' ? 'selected' : ''}>الجنيه الإسترليني (£)</option>
                                    </select>
                                </div>
                            </div>

                            <!-- إعدادات العملات المتعددة -->
                            <div class="mb-3">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="enableMultiCurrency" ${settings.enableMultiCurrency ? 'checked' : ''} onchange="toggleMultiCurrency()">
                                    <label class="form-check-label" for="enableMultiCurrency">
                                        <i class="fas fa-coins me-2"></i>
                                        تفعيل العملات المتعددة
                                    </label>
                                </div>
                                <small class="text-muted">يسمح بإدارة العملاء والموردين بعملات مختلفة</small>
                            </div>

                            <!-- جدول أسعار الصرف -->
                            <div id="exchangeRatesSection" style="display: ${settings.enableMultiCurrency ? 'block' : 'none'};">
                                <label class="form-label">أسعار الصرف (مقابل العملة الأساسية)</label>
                                <div class="table-responsive">
                                    <table class="table table-sm table-bordered">
                                        <thead class="table-light">
                                            <tr>
                                                <th>العملة</th>
                                                <th>الرمز</th>
                                                <th>سعر الصرف</th>
                                                <th>آخر تحديث</th>
                                            </tr>
                                        </thead>
                                        <tbody id="exchangeRatesTable">
                                            ${getExchangeRatesHTML(settings)}
                                        </tbody>
                                    </table>
                                </div>
                                <button type="button" class="btn btn-sm btn-outline-primary" onclick="updateExchangeRates()">
                                    <i class="fas fa-sync me-2"></i>تحديث أسعار الصرف
                                </button>
                            </div>

                            <div class="mb-3">
                                <label for="taxRate" class="form-label">معدل الضريبة (%)</label>
                                <input type="number" class="form-control" id="taxRate" min="0" max="100" step="0.01" value="${settings.taxRate || 0}">
                            </div>

                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-save me-2"></i>
                                حفظ إعدادات الشركة
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <!-- إعدادات النظام -->
            <div class="col-lg-6 mb-4">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-cogs me-2"></i>
                            إعدادات النظام
                        </h5>
                    </div>
                    <div class="card-body">
                        <form id="systemSettingsForm" onsubmit="saveSystemSettings(event)">
                            <div class="mb-3">
                                <label for="systemPassword" class="form-label">كلمة مرور النظام</label>
                                <input type="password" class="form-control" id="systemPassword" value="${settings.password || '123'}">
                            </div>

                            <div class="mb-3">
                                <label for="companyLogo" class="form-label">شعار الشركة</label>
                                <input type="file" class="form-control" id="companyLogo" accept="image/*" onchange="uploadLogo(this)">
                                <small class="text-muted">يُفضل صورة بحجم 200x100 بكسل</small>
                                ${settings.logoUrl ? `<div class="mt-2"><img src="${settings.logoUrl}" alt="شعار الشركة" style="max-height: 100px;"></div>` : ''}
                            </div>

                            <div class="mb-3">
                                <label for="autoBackup" class="form-label">النسخ الاحتياطي التلقائي</label>
                                <select class="form-select" id="autoBackup">
                                    <option value="disabled" ${settings.autoBackup === 'disabled' ? 'selected' : ''}>معطل</option>
                                    <option value="daily" ${settings.autoBackup === 'daily' ? 'selected' : ''}>يومي</option>
                                    <option value="weekly" ${settings.autoBackup === 'weekly' ? 'selected' : ''}>أسبوعي</option>
                                    <option value="monthly" ${settings.autoBackup === 'monthly' ? 'selected' : ''}>شهري</option>
                                </select>
                            </div>

                            <button type="submit" class="btn btn-primary">
                                <i class="fas fa-save me-2"></i>
                                حفظ إعدادات النظام
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- إعدادات الطباعة -->
        <div class="row">
            <div class="col-12 mb-4">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-print me-2"></i>
                            إعدادات الطباعة
                        </h5>
                    </div>
                    <div class="card-body">
                        <form id="printSettingsForm" onsubmit="savePrintSettings(event)">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="mb-3">
                                        <i class="fas fa-eye me-2"></i>
                                        عرض المعلومات
                                    </h6>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showAppName" ${settings.printSettings?.showAppName !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showAppName">
                                                <i class="fas fa-tag me-2"></i>
                                                إظهار اسم التطبيق في الملفات المطبوعة
                                            </label>
                                        </div>
                                        <small class="text-muted">عرض "SAM PRO" في أسفل الملفات المطبوعة</small>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showCompanyLogo" ${settings.printSettings?.showCompanyLogo !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showCompanyLogo">
                                                <i class="fas fa-image me-2"></i>
                                                إظهار شعار الشركة
                                            </label>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showPrintDate" ${settings.printSettings?.showPrintDate !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showPrintDate">
                                                <i class="fas fa-calendar me-2"></i>
                                                إظهار تاريخ الطباعة
                                            </label>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showPageNumbers" ${settings.printSettings?.showPageNumbers !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showPageNumbers">
                                                <i class="fas fa-list-ol me-2"></i>
                                                إظهار أرقام الصفحات
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <h6 class="mb-3">
                                        <i class="fas fa-cogs me-2"></i>
                                        إعدادات التخصيص
                                    </h6>

                                    <div class="mb-3">
                                        <label for="printHeaderText" class="form-label">نص رأس الصفحة (اختياري)</label>
                                        <input type="text" class="form-control" id="printHeaderText" value="${settings.printSettings?.headerText || ''}" placeholder="مثال: تقرير شهري">
                                    </div>

                                    <div class="mb-3">
                                        <label for="printFooterText" class="form-label">نص تذييل الصفحة (اختياري)</label>
                                        <input type="text" class="form-control" id="printFooterText" value="${settings.printSettings?.footerText || ''}" placeholder="مثال: شكراً لتعاملكم معنا">
                                    </div>

                                    <div class="mb-3">
                                        <label for="printOrientation" class="form-label">اتجاه الطباعة</label>
                                        <select class="form-select" id="printOrientation">
                                            <option value="portrait" ${settings.printSettings?.orientation === 'portrait' ? 'selected' : ''}>عمودي (Portrait)</option>
                                            <option value="landscape" ${settings.printSettings?.orientation === 'landscape' ? 'selected' : ''}>أفقي (Landscape)</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="printPageSize" class="form-label">حجم الورق</label>
                                        <select class="form-select" id="printPageSize">
                                            <option value="A4" ${settings.printSettings?.pageSize === 'A4' ? 'selected' : ''}>A4</option>
                                            <option value="A3" ${settings.printSettings?.pageSize === 'A3' ? 'selected' : ''}>A3</option>
                                            <option value="Letter" ${settings.printSettings?.pageSize === 'Letter' ? 'selected' : ''}>Letter</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between">
                                <button type="button" class="btn btn-outline-info" onclick="previewPrintSettings()">
                                    <i class="fas fa-eye me-2"></i>
                                    معاينة إعدادات الطباعة
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-save me-2"></i>
                                    حفظ إعدادات الطباعة
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- إعدادات الطباعة -->
        <div class="row">
            <div class="col-12 mb-4">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-print me-2"></i>
                            إعدادات الطباعة
                        </h5>
                    </div>
                    <div class="card-body">
                        <form id="printSettingsForm" onsubmit="savePrintSettings(event)">
                            <div class="row">
                                <div class="col-md-6">
                                    <h6 class="mb-3">
                                        <i class="fas fa-eye me-2"></i>
                                        عرض المعلومات
                                    </h6>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showAppName" ${settings.printSettings?.showAppName !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showAppName">
                                                <i class="fas fa-tag me-2"></i>
                                                إظهار اسم التطبيق في الملفات المطبوعة
                                            </label>
                                        </div>
                                        <small class="text-muted">عرض "SAM PRO" في أسفل الملفات المطبوعة</small>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showCompanyLogo" ${settings.printSettings?.showCompanyLogo !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showCompanyLogo">
                                                <i class="fas fa-image me-2"></i>
                                                إظهار شعار الشركة
                                            </label>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showPrintDate" ${settings.printSettings?.showPrintDate !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showPrintDate">
                                                <i class="fas fa-calendar me-2"></i>
                                                إظهار تاريخ الطباعة
                                            </label>
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="showPageNumbers" ${settings.printSettings?.showPageNumbers !== false ? 'checked' : ''}>
                                            <label class="form-check-label" for="showPageNumbers">
                                                <i class="fas fa-list-ol me-2"></i>
                                                إظهار أرقام الصفحات
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <h6 class="mb-3">
                                        <i class="fas fa-cogs me-2"></i>
                                        إعدادات التخصيص
                                    </h6>

                                    <div class="mb-3">
                                        <label for="printHeaderText" class="form-label">نص رأس الصفحة (اختياري)</label>
                                        <input type="text" class="form-control" id="printHeaderText" value="${settings.printSettings?.headerText || ''}" placeholder="مثال: تقرير شهري">
                                    </div>

                                    <div class="mb-3">
                                        <label for="printFooterText" class="form-label">نص تذييل الصفحة (اختياري)</label>
                                        <input type="text" class="form-control" id="printFooterText" value="${settings.printSettings?.footerText || ''}" placeholder="مثال: شكراً لتعاملكم معنا">
                                    </div>

                                    <div class="mb-3">
                                        <label for="printOrientation" class="form-label">اتجاه الطباعة</label>
                                        <select class="form-select" id="printOrientation">
                                            <option value="portrait" ${settings.printSettings?.orientation === 'portrait' ? 'selected' : ''}>عمودي (Portrait)</option>
                                            <option value="landscape" ${settings.printSettings?.orientation === 'landscape' ? 'selected' : ''}>أفقي (Landscape)</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="printPageSize" class="form-label">حجم الورق</label>
                                        <select class="form-select" id="printPageSize">
                                            <option value="A4" ${settings.printSettings?.pageSize === 'A4' ? 'selected' : ''}>A4</option>
                                            <option value="A3" ${settings.printSettings?.pageSize === 'A3' ? 'selected' : ''}>A3</option>
                                            <option value="Letter" ${settings.printSettings?.pageSize === 'Letter' ? 'selected' : ''}>Letter</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between">
                                <button type="button" class="btn btn-outline-info" onclick="previewPrintSettings()">
                                    <i class="fas fa-eye me-2"></i>
                                    معاينة إعدادات الطباعة
                                </button>
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-save me-2"></i>
                                    حفظ إعدادات الطباعة
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- معلومات المطور -->
        <div class="row">
            <div class="col-12">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-user-tie me-2"></i>
                            معلومات المطور
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <h6><i class="fas fa-user me-2"></i>المطور</h6>
                                <p class="mb-2"><strong>MOHANNAD AHMAD</strong></p>

                                <h6><i class="fas fa-phone me-2"></i>رقم الهاتف</h6>
                                <p class="mb-2">+963-998-171-954</p>

                                <h6><i class="fas fa-code me-2"></i>التخصص</h6>
                                <p class="mb-2">تطوير تطبيقات الويب والمحاسبة</p>
                            </div>
                            <div class="col-md-6">
                                <h6><i class="fas fa-calendar me-2"></i>تاريخ الإصدار</h6>
                                <p class="mb-2">يناير 2025</p>

                                <h6><i class="fas fa-tag me-2"></i>إصدار البرنامج</h6>
                                <p class="mb-2">SAM PRO v1.0.0</p>

                                <h6><i class="fas fa-tools me-2"></i>التقنيات المستخدمة</h6>
                                <p class="mb-2">HTML5, CSS3, JavaScript, Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * الحصول على HTML أسعار الصرف
 */
function getExchangeRatesHTML(settings) {
    const currencies = [
        { code: 'USD', name: 'الدولار الأمريكي', symbol: '$' },
        { code: 'EUR', name: 'اليورو', symbol: '€' },
        { code: 'SAR', name: 'الريال السعودي', symbol: 'ر.س' },
        { code: 'AED', name: 'الدرهم الإماراتي', symbol: 'د.إ' },
        { code: 'EGP', name: 'الجنيه المصري', symbol: 'ج.م' },
        { code: 'JOD', name: 'الدينار الأردني', symbol: 'د.أ' },
        { code: 'LBP', name: 'الليرة اللبنانية', symbol: 'ل.ل' },
        { code: 'TRY', name: 'الليرة التركية', symbol: '₺' },
        { code: 'GBP', name: 'الجنيه الإسترليني', symbol: '£' }
    ];

    const baseCurrency = settings.currency || 'SYP';
    const exchangeRates = settings.exchangeRates || {};

    return currencies
        .filter(curr => curr.code !== baseCurrency)
        .map(currency => {
            const rate = exchangeRates[currency.code] || 1;
            const lastUpdate = exchangeRates[`${currency.code}_updated`] || 'لم يحدث';

            return `
                <tr>
                    <td>${currency.name}</td>
                    <td>${currency.symbol}</td>
                    <td>
                        <input type="number" class="form-control form-control-sm"
                               id="rate_${currency.code}"
                               value="${rate}"
                               min="0" step="0.0001"
                               onchange="updateSingleExchangeRate('${currency.code}', this.value)">
                    </td>
                    <td><small class="text-muted">${lastUpdate}</small></td>
                </tr>
            `;
        }).join('');
}

/**
 * تفعيل/إلغاء تفعيل العملات المتعددة
 */
function toggleMultiCurrency() {
    const checkbox = document.getElementById('enableMultiCurrency');
    const section = document.getElementById('exchangeRatesSection');

    if (checkbox.checked) {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

/**
 * تحديث رمز العملة
 */
function updateCurrencySymbol() {
    const currencySelect = document.getElementById('currency');
    const selectedOption = currencySelect.options[currencySelect.selectedIndex];
    const currencyText = selectedOption.textContent;
    const symbol = currencyText.match(/\(([^)]+)\)/)?.[1] || '';

    // تحديث رمز العملة في الإعدادات مؤقتاً
    if (!appData.settings.currencySymbols) {
        appData.settings.currencySymbols = {};
    }
    appData.settings.currencySymbols[currencySelect.value] = symbol;
}

/**
 * تحديث سعر صرف واحد
 */
function updateSingleExchangeRate(currencyCode, rate) {
    if (!appData.settings.exchangeRates) {
        appData.settings.exchangeRates = {};
    }

    appData.settings.exchangeRates[currencyCode] = parseFloat(rate) || 1;
    appData.settings.exchangeRates[`${currencyCode}_updated`] = new Date().toLocaleString('ar-SY');

    console.log(`تم تحديث سعر صرف ${currencyCode}: ${rate}`);
}

/**
 * تحديث جميع أسعار الصرف
 */
function updateExchangeRates() {
    const currencies = ['USD', 'EUR', 'SAR', 'AED', 'EGP', 'JOD', 'LBP', 'TRY', 'GBP'];
    const baseCurrency = appData.settings.currency || 'SYP';

    if (!appData.settings.exchangeRates) {
        appData.settings.exchangeRates = {};
    }

    currencies.forEach(currency => {
        if (currency !== baseCurrency) {
            const input = document.getElementById(`rate_${currency}`);
            if (input) {
                const rate = parseFloat(input.value) || 1;
                appData.settings.exchangeRates[currency] = rate;
                appData.settings.exchangeRates[`${currency}_updated`] = new Date().toLocaleString('ar-SY');
            }
        }
    });

    saveData();
    alert('تم تحديث أسعار الصرف بنجاح');
}

/**
 * الحصول على رمز العملة
 */
function getCurrencySymbol(currencyCode) {
    const symbols = {
        'SYP': 'ل.س',
        'USD': '$',
        'EUR': '€',
        'SAR': 'ر.س',
        'AED': 'د.إ',
        'EGP': 'ج.م',
        'JOD': 'د.أ',
        'LBP': 'ل.ل',
        'TRY': '₺',
        'GBP': '£'
    };

    return symbols[currencyCode] || currencyCode;
}

/**
 * تحويل المبلغ بين العملات
 */
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (fromCurrency === toCurrency) {
        return amount;
    }

    const baseCurrency = appData.settings.currency || 'SYP';
    const exchangeRates = appData.settings.exchangeRates || {};

    let amountInBase = amount;

    // تحويل إلى العملة الأساسية أولاً
    if (fromCurrency !== baseCurrency) {
        const fromRate = exchangeRates[fromCurrency] || 1;
        amountInBase = amount / fromRate;
    }

    // تحويل من العملة الأساسية إلى العملة المطلوبة
    if (toCurrency !== baseCurrency) {
        const toRate = exchangeRates[toCurrency] || 1;
        return amountInBase * toRate;
    }

    return amountInBase;
}

/**
 * تنسيق المبلغ مع العملة
 */
function formatCurrencyWithCode(amount, currencyCode) {
    const symbol = getCurrencySymbol(currencyCode);
    return `${parseFloat(amount).toFixed(2)} ${symbol}`;
}

/**
 * صفحة النسخ الاحتياطي
 */
function getBackupHTML() {
    return `
        <div class="row">
            <div class="col-12">
                <h1 class="h3 mb-4">
                    <i class="fas fa-database me-2"></i>
                    النسخ الاحتياطي والاستعادة
                </h1>
            </div>
        </div>

        <div class="row">
            <!-- إنشاء نسخة احتياطية -->
            <div class="col-lg-6 mb-4">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-download me-2"></i>
                            إنشاء نسخة احتياطية
                        </h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">
                            قم بإنشاء نسخة احتياطية من جميع بيانات النظام لحفظها في مكان آمن.
                        </p>

                        <div class="mb-3">
                            <label for="backupName" class="form-label">اسم النسخة الاحتياطية</label>
                            <input type="text" class="form-control" id="backupName" value="backup_${new Date().toISOString().split('T')[0]}">
                        </div>

                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="includeSettings" checked>
                                <label class="form-check-label" for="includeSettings">
                                    تضمين إعدادات النظام
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="includeData" checked>
                                <label class="form-check-label" for="includeData">
                                    تضمين جميع البيانات
                                </label>
                            </div>
                        </div>

                        <button type="button" class="btn btn-primary" onclick="createBackup()">
                            <i class="fas fa-download me-2"></i>
                            إنشاء وتحميل النسخة الاحتياطية
                        </button>

                        <div class="mt-3">
                            <small class="text-muted">
                                <i class="fas fa-info-circle me-1"></i>
                                سيتم تحميل ملف JSON يحتوي على جميع البيانات
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <!-- استعادة نسخة احتياطية -->
            <div class="col-lg-6 mb-4">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-upload me-2"></i>
                            استعادة نسخة احتياطية
                        </h5>
                    </div>
                    <div class="card-body">
                        <p class="text-muted">
                            قم برفع ملف النسخة الاحتياطية لاستعادة البيانات.
                        </p>

                        <div class="mb-3">
                            <label for="backupFile" class="form-label">ملف النسخة الاحتياطية</label>
                            <input type="file" class="form-control" id="backupFile" accept=".json" onchange="validateBackupFile(this)">
                            <small class="text-muted">يجب أن يكون الملف بصيغة JSON</small>
                        </div>

                        <div class="mb-3" id="backupFileInfo" style="display: none;">
                            <div class="alert alert-info">
                                <h6><i class="fas fa-info-circle me-2"></i>معلومات النسخة الاحتياطية</h6>
                                <div id="backupDetails"></div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="confirmRestore">
                                <label class="form-check-label" for="confirmRestore">
                                    أؤكد أنني أريد استبدال البيانات الحالية
                                </label>
                            </div>
                        </div>

                        <button type="button" class="btn btn-warning" onclick="restoreBackup()" disabled id="restoreBtn">
                            <i class="fas fa-upload me-2"></i>
                            استعادة النسخة الاحتياطية
                        </button>

                        <div class="mt-3">
                            <small class="text-danger">
                                <i class="fas fa-exclamation-triangle me-1"></i>
                                تحذير: سيتم استبدال جميع البيانات الحالية
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- إحصائيات البيانات الحالية -->
        <div class="row">
            <div class="col-12">
                <div class="card shadow">
                    <div class="card-header">
                        <h5 class="card-title mb-0">
                            <i class="fas fa-chart-pie me-2"></i>
                            إحصائيات البيانات الحالية
                        </h5>
                    </div>
                    <div class="card-body">
                        <div class="row text-center">
                            <div class="col-md-2">
                                <div class="border p-3 rounded">
                                    <h4 class="text-primary">${appData.customers.length}</h4>
                                    <small class="text-muted">العملاء</small>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="border p-3 rounded">
                                    <h4 class="text-success">${appData.suppliers.length}</h4>
                                    <small class="text-muted">الموردين</small>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="border p-3 rounded">
                                    <h4 class="text-info">${appData.products.length}</h4>
                                    <small class="text-muted">الأصناف</small>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="border p-3 rounded">
                                    <h4 class="text-warning">${appData.warehouses.length}</h4>
                                    <small class="text-muted">المخازن</small>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="border p-3 rounded">
                                    <h4 class="text-danger">${appData.invoices.length}</h4>
                                    <small class="text-muted">الفواتير</small>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="border p-3 rounded">
                                    <h4 class="text-secondary">${appData.payments.length}</h4>
                                    <small class="text-muted">السندات</small>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4 text-center">
                            <small class="text-muted">
                                آخر تحديث: ${new Date().toLocaleString('ar-SY')}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
