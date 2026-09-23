/* ==========================================================================
   Varavu Selavu - Income & Expense Manager JavaScript Logic
   ========================================================================== */

// --- Translations System (Tamil & English) ---
const translations = {
  ta: {
    appTitle: "வரவு செலவு",
    appSubtitle: "தினசரி கணக்கு மேலாண்மை",
    netBalance: "மீதி இருப்பு",
    totalIncome: "மொத்த வரவு",
    totalExpense: "மொத்த செலவு",
    monthlyBudget: "மாதாந்திர பட்ஜெட் வரம்பு",
    edit: "மாற்று",
    categoryBreakdown: "செலவு வகைகள்",
    recentTransactions: "சமீபத்திய பதிவுகள்",
    viewAll: "அனைத்தும் பார்க்க",
    navDashboard: "முகப்பு",
    navSheet: "கணக்கு ஷீட்",
    navAdd: "சேர்க்க",
    navAnalytics: "அறிக்கை",
    navSettings: "அமைப்புகள்",
    addTransaction: "புதிய வரவு / செலவு சேர்க்க",
    editTransaction: "பதிவை மாற்றியமைக்க",
    typeExpense: "செலவு (Expense)",
    typeIncome: "வரவு (Income)",
    labelAmount: "தொகை (₹)",
    labelDate: "தேதி",
    labelCategory: "வகை",
    labelPayment: "கட்டண முறை",
    labelNote: "விவரம் / குறிப்பு",
    notePlaceholder: "எ.கா. காய்கறி, வீட்டு வாடகை...",
    searchPlaceholder: "தேடுக (உணவு, GPay, சம்பளம்...)",
    allTypes: "அனைத்து கணக்கும்",
    incomeOnly: "வரவு மட்டும்",
    expenseOnly: "செலவு மட்டும்",
    allCategories: "அனைத்து வகைகள்",
    exportExcel: "Excel Download",
    colDate: "தேதி",
    colCategory: "வகை",
    colNote: "விவரம் / குறிப்பு",
    colPayment: "கட்டண முறை",
    colType: "வகைமை",
    colAmount: "தொகை (₹)",
    colAction: "செயல்",
    noTransactionsFound: "பதிவுகள் எதுவும் காணப்படவில்லை",
    monthlyComparison: "வரவு vs செலவு (ஒப்பீடு)",
    paymentMethods: "கட்டண முறை பகுப்பாய்வு",
    backupTitle: "தரவு பேக்அப் & மீட்டமைப்பு",
    backupDesc: "உங்கள் வரவு-செலவு பதிவுகளை பத்திரமாக பேக்அப் எடுத்துக்கொள்ளலாம்.",
    downloadBackup: "JSON Backup Download",
    restoreBackup: "Restore Backup",
    dangerZone: "தரவு அழிப்பு",
    dangerDesc: "அனைத்து வரவு செலவு பதிவுகளையும் நிரந்தரமாக அழிக்க விரும்பினால் மட்டும் பயன்படுத்தவும்.",
    clearAllData: "அனைத்து தகவலையும் அழி",
    setBudgetTitle: "மாதாந்திர பட்ஜெட் நிர்ணயம்",
    budgetAmountLabel: "மாதாந்திர இலக்கு தொகை (₹)",
    btnCancel: "ரத்து செய்",
    btnSave: "சேமிக்கவும்",
    safeBalance: "பாதுகாப்பான இருப்பு",
    deficitBalance: "கவனிக்கவும்! செலவு அதிகம்",
    usedPercent: "பயன்படுத்தப்பட்டது",
    remaining: "மீதம்",
    recordsCount: "பதிவுகள்",
    confirmDelete: "இந்த பதிவை நிச்சயமாக நீக்க வேண்டுமா?",
    confirmClear: "நிச்சயமாக அனைத்து பதிவுகளையும் அழிக்க வேண்டுமா? மீட்டெடுக்க முடியாது!",
    backupRestored: "பேக்அப் வெற்றிகரமாக மீட்டெடுக்கப்பட்டது!",
    invalidBackup: "தவறான பேக்அப் கோப்பு format!",
    
    // Categories
    catFood: "உணவு & ஹோட்டல்",
    catRent: "வீட்டு வாடகை",
    catGroceries: "மளிகை பொருட்கள்",
    catBills: "மின்சாரம் & ரீசார்ஜ்",
    catTravel: "பயணம் & பெட்ரோல்",
    catShopping: "ஷாப்பிங் & உடைகள்",
    catHealth: "மருத்துவம் & மாத்திரை",
    catSalary: "மாத சம்பளம்",
    catBusiness: "வியாபாரம் / வர்த்தகம்",
    catInvestment: "முதலீடு / சேமிப்பு",
    catOther: "இதர செலவுகள்",

    // Payment Methods
    payGpay: "GPay / UPI",
    payCash: "பணம் (Cash)",
    payCard: "கார்டு (Card)",
    payBank: "வங்கி (Bank)"
  },
  en: {
    appTitle: "Varavu Selavu",
    appSubtitle: "Daily Income & Expense Manager",
    netBalance: "Net Balance",
    totalIncome: "Total Income",
    totalExpense: "Total Expense",
    monthlyBudget: "Monthly Budget Limit",
    edit: "Edit",
    categoryBreakdown: "Category Breakdown",
    recentTransactions: "Recent Transactions",
    viewAll: "View All",
    navDashboard: "Dashboard",
    navSheet: "Sheet View",
    navAdd: "Add",
    navAnalytics: "Analytics",
    navSettings: "Settings",
    addTransaction: "Add New Entry",
    editTransaction: "Edit Entry",
    typeExpense: "Expense",
    typeIncome: "Income",
    labelAmount: "Amount (₹)",
    labelDate: "Date",
    labelCategory: "Category",
    labelPayment: "Payment Method",
    labelNote: "Note / Description",
    notePlaceholder: "e.g. Groceries, Rent...",
    searchPlaceholder: "Search (Food, GPay, Salary...)",
    allTypes: "All Types",
    incomeOnly: "Income Only",
    expenseOnly: "Expense Only",
    allCategories: "All Categories",
    exportExcel: "Export CSV/Excel",
    colDate: "Date",
    colCategory: "Category",
    colNote: "Note",
    colPayment: "Payment",
    colType: "Type",
    colAmount: "Amount (₹)",
    colAction: "Actions",
    noTransactionsFound: "No transactions found",
    monthlyComparison: "Income vs Expense Comparison",
    paymentMethods: "Payment Methods Analysis",
    backupTitle: "Data Backup & Restore",
    backupDesc: "Safely backup and export your expense sheet records.",
    downloadBackup: "Download JSON Backup",
    restoreBackup: "Restore Backup File",
    dangerZone: "Danger Zone",
    dangerDesc: "Permanently delete all income and expense records.",
    clearAllData: "Clear All Data",
    setBudgetTitle: "Set Monthly Budget",
    budgetAmountLabel: "Target Budget Amount (₹)",
    btnCancel: "Cancel",
    btnSave: "Save Entry",
    safeBalance: "Healthy Balance",
    deficitBalance: "Warning: High Spending",
    usedPercent: "Used",
    remaining: "Remaining",
    recordsCount: "records",
    confirmDelete: "Are you sure you want to delete this record?",
    confirmClear: "Are you sure you want to clear ALL data? This action cannot be undone!",
    backupRestored: "Backup restored successfully!",
    invalidBackup: "Invalid backup JSON file!",
    
    // Categories
    catFood: "Food & Dining",
    catRent: "House Rent",
    catGroceries: "Groceries",
    catBills: "Electricity & Bills",
    catTravel: "Travel & Fuel",
    catShopping: "Shopping & Clothes",
    catHealth: "Medical & Health",
    catSalary: "Monthly Salary",
    catBusiness: "Business Income",
    catInvestment: "Savings / Investment",
    catOther: "Others",

    // Payment Methods
    payGpay: "GPay / UPI",
    payCash: "Cash",
    payCard: "Card",
    payBank: "Bank Transfer"
  }
};

const CATEGORIES = [
  { id: 'catSalary', icon: 'wallet', type: 'income' },
  { id: 'catBusiness', icon: 'briefcase', type: 'income' },
  { id: 'catInvestment', icon: 'trending-up', type: 'income' },
  { id: 'catFood', icon: 'utensils', type: 'expense' },
  { id: 'catRent', icon: 'home', type: 'expense' },
  { id: 'catGroceries', icon: 'shopping-cart', type: 'expense' },
  { id: 'catBills', icon: 'zap', type: 'expense' },
  { id: 'catTravel', icon: 'car', type: 'expense' },
  { id: 'catShopping', icon: 'shopping-bag', type: 'expense' },
  { id: 'catHealth', icon: 'activity', type: 'expense' },
  { id: 'catOther', icon: 'help-circle', type: 'expense' }
];

// --- App State ---
let currentLang = localStorage.getItem('app_lang') || 'ta';
let currentTheme = localStorage.getItem('app_theme') || 'dark';
let monthlyBudget = parseFloat(localStorage.getItem('app_budget')) || 35000;
let transactions = [];
let selectedDate = new Date(); // Currently active month for filtering
let categoryChartInstance = null;
let barChartInstance = null;
let doughnutChartInstance = null;

// --- Sample Initial Data (If Empty) ---
const sampleData = [
  { id: 't1', date: '2026-09-01', type: 'income', category: 'catSalary', amount: 45000, paymentMethod: 'bank', note: 'செப்டம்பர் மாத சம்பளம்' },
  { id: 't2', date: '2026-09-02', type: 'expense', category: 'catRent', amount: 12000, paymentMethod: 'gpay', note: 'வீட்டு வாடகை' },
  { id: 't3', date: '2026-09-03', type: 'expense', category: 'catGroceries', amount: 3450, paymentMethod: 'cash', note: 'மாத மளிகை சாமான்கள்' },
  { id: 't4', date: '2026-09-04', type: 'expense', category: 'catBills', amount: 1450, paymentMethod: 'gpay', note: 'EB கரண்ட் பில்' },
  { id: 't5', date: '2026-09-05', type: 'expense', category: 'catTravel', amount: 1200, paymentMethod: 'cash', note: 'பைக் பெட்ரோல்' },
  { id: 't6', date: '2026-09-06', type: 'expense', category: 'catFood', amount: 680, paymentMethod: 'card', note: 'குடும்பத்துடன் ஹோட்டல் உணவு' },
  { id: 't7', date: '2026-09-07', type: 'expense', category: 'catHealth', amount: 550, paymentMethod: 'gpay', note: 'மருந்தகம் மாத்திரைகள்' }
];

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  loadStoredData();
  setupTheme();
  setupLanguage();
  populateCategoryDropdowns();
  bindEvents();
  renderApp();
});

function loadStoredData() {
  const saved = localStorage.getItem('app_transactions');
  if (saved) {
    try {
      transactions = JSON.parse(saved);
    } catch (e) {
      transactions = [...sampleData];
    }
  } else {
    transactions = [...sampleData];
    saveTransactions();
  }
}

function saveTransactions() {
  localStorage.setItem('app_transactions', JSON.stringify(transactions));
}

// --- Theme Management ---
function setupTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const themeIcon = document.getElementById('theme-icon');
  if (themeIcon) {
    themeIcon.setAttribute('data-lucide', currentTheme === 'dark' ? 'sun' : 'moon');
    lucide.createIcons();
  }
}

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('app_theme', currentTheme);
  setupTheme();
  updateCharts();
}

// --- Language Management ---
function setupLanguage() {
  document.getElementById('lang-label').innerText = currentLang === 'ta' ? 'EN' : 'தமிழ்';
  
  // Translate all text nodes with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      elem.innerText = translations[currentLang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      elem.placeholder = translations[currentLang][key];
    }
  });

  populateCategoryDropdowns();
}

function toggleLanguage() {
  currentLang = currentLang === 'ta' ? 'en' : 'ta';
  localStorage.setItem('app_lang', currentLang);
  setupLanguage();
  renderApp();
}

function populateCategoryDropdowns() {
  const modalSelect = document.getElementById('trans-category');
  const filterSelect = document.getElementById('filter-category');
  
  if (!modalSelect || !filterSelect) return;

  const currentType = document.querySelector('input[name="trans-type"]:checked')?.value || 'expense';

  modalSelect.innerHTML = '';
  CATEGORIES.filter(c => c.type === currentType || c.type === 'income' || currentType === 'expense').forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.innerText = translations[currentLang][cat.id] || cat.id;
    modalSelect.appendChild(opt);
  });

  filterSelect.innerHTML = `<option value="all">${translations[currentLang].allCategories}</option>`;
  CATEGORIES.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat.id;
    opt.innerText = translations[currentLang][cat.id] || cat.id;
    filterSelect.appendChild(opt);
  });
}

// --- Navigation & View Switching ---
function switchView(targetViewId) {
  document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));

  const targetPanel = document.getElementById(targetViewId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  const activeNav = document.querySelector(`.nav-item[data-target="${targetViewId}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }

  renderApp();
}

// --- Core Render Logic ---
function renderApp() {
  updateMonthHeader();
  const monthFiltered = getFilteredByMonth(transactions, selectedDate);

  renderSummary(monthFiltered);
  renderRecentTransactions(monthFiltered);
  renderTransactionsTable();
  updateBudgetDisplay(monthFiltered);
  updateCharts();

  if (window.lucide) {
    lucide.createIcons();
  }
}

function updateMonthHeader() {
  const monthNamesTa = ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"];
  const monthNamesEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const m = selectedDate.getMonth();
  const y = selectedDate.getFullYear();
  
  const monthStr = currentLang === 'ta' ? `${monthNamesTa[m]} ${y}` : `${monthNamesEn[m]} ${y}`;
  document.getElementById('selected-month-label').innerText = monthStr;
}

function getFilteredByMonth(dataList, dateObj) {
  const targetYear = dateObj.getFullYear();
  const targetMonth = dateObj.getMonth();
  return dataList.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate.getFullYear() === targetYear && itemDate.getMonth() === targetMonth;
  });
}

// --- Summary & Budget ---
function renderSummary(monthData) {
  const totalIncome = monthData.filter(t => t.type === 'income').reduce((acc, t) => acc + parseFloat(t.amount), 0);
  const totalExpense = monthData.filter(t => t.type === 'expense').reduce((acc, t) => acc + parseFloat(t.amount), 0);
  const netBalance = totalIncome - totalExpense;

  const incomeCount = monthData.filter(t => t.type === 'income').length;
  const expenseCount = monthData.filter(t => t.type === 'expense').length;

  document.getElementById('total-income').innerText = `₹${totalIncome.toLocaleString('en-IN')}`;
  document.getElementById('total-expense').innerText = `₹${totalExpense.toLocaleString('en-IN')}`;
  document.getElementById('total-balance').innerText = `₹${netBalance.toLocaleString('en-IN')}`;

  document.getElementById('income-count').innerText = `${incomeCount} ${translations[currentLang].recordsCount}`;
  document.getElementById('expense-count').innerText = `${expenseCount} ${translations[currentLang].recordsCount}`;

  const balanceStatus = document.getElementById('balance-status-text');
  if (netBalance >= 0) {
    balanceStatus.innerText = translations[currentLang].safeBalance;
    balanceStatus.className = 'card-footer text-success';
  } else {
    balanceStatus.innerText = translations[currentLang].deficitBalance;
    balanceStatus.className = 'card-footer text-danger';
  }
}

function updateBudgetDisplay(monthData) {
  const totalExpense = monthData.filter(t => t.type === 'expense').reduce((acc, t) => acc + parseFloat(t.amount), 0);
  const percent = Math.min(100, Math.round((totalExpense / monthlyBudget) * 100)) || 0;
  const remaining = Math.max(0, monthlyBudget - totalExpense);

  document.getElementById('budget-display').innerText = `₹${monthlyBudget.toLocaleString('en-IN')}`;
  document.getElementById('budget-percent').innerText = `${percent}% ${translations[currentLang].usedPercent}`;
  document.getElementById('budget-remaining').innerText = `${translations[currentLang].remaining}: ₹${remaining.toLocaleString('en-IN')}`;

  const fill = document.getElementById('budget-progress-fill');
  fill.style.width = `${percent}%`;
  if (percent >= 90) {
    fill.classList.add('warning');
  } else {
    fill.classList.remove('warning');
  }
}

// --- Recent Transactions ---
function renderRecentTransactions(monthData) {
  const container = document.getElementById('recent-transactions-list');
  if (!container) return;

  const sorted = [...monthData].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  if (sorted.length === 0) {
    container.innerHTML = `<div class="empty-state" style="padding: 20px 0;"><p>${translations[currentLang].noTransactionsFound}</p></div>`;
    return;
  }

  container.innerHTML = sorted.map(item => {
    const catObj = CATEGORIES.find(c => c.id === item.category) || { icon: 'circle-dollar-sign' };
    const catName = translations[currentLang][item.category] || item.category;
    const isIncome = item.type === 'income';
    const sign = isIncome ? '+' : '-';
    const amountClass = isIncome ? 'text-success' : 'text-danger';

    return `
      <div class="transaction-item">
        <div class="trans-icon-title">
          <div class="trans-cat-icon"><i data-lucide="${catObj.icon}"></i></div>
          <div class="trans-details">
            <span class="trans-title-text">${item.note || catName}</span>
            <span class="trans-sub-text">${item.date} • ${getPaymentLabel(item.paymentMethod)}</span>
          </div>
        </div>
        <div class="trans-amount-wrapper">
          <span class="trans-amount ${amountClass}">${sign}₹${parseFloat(item.amount).toLocaleString('en-IN')}</span>
          <span class="trans-badge">${catName}</span>
        </div>
      </div>
    `;
  }).join('');
}

// --- Sheet View Table ---
function renderTransactionsTable() {
  const tbody = document.getElementById('table-body');
  const emptyState = document.getElementById('empty-state');
  if (!tbody) return;

  const search = (document.getElementById('search-input')?.value || '').toLowerCase();
  const filterType = document.getElementById('filter-type')?.value || 'all';
  const filterCategory = document.getElementById('filter-category')?.value || 'all';

  let list = getFilteredByMonth(transactions, selectedDate);

  if (filterType !== 'all') {
    list = list.filter(t => t.type === filterType);
  }
  if (filterCategory !== 'all') {
    list = list.filter(t => t.category === filterCategory);
  }
  if (search) {
    list = list.filter(t => 
      (t.note && t.note.toLowerCase().includes(search)) ||
      (t.category && (translations[currentLang][t.category] || '').toLowerCase().includes(search)) ||
      (t.paymentMethod && t.paymentMethod.toLowerCase().includes(search))
    );
  }

  list.sort((a, b) => new Date(b.date) - new Date(a.date));

  if (list.length === 0) {
    tbody.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  tbody.innerHTML = list.map(item => {
    const isIncome = item.type === 'income';
    const amountClass = isIncome ? 'text-success' : 'text-danger';
    const typeLabel = isIncome ? translations[currentLang].typeIncome : translations[currentLang].typeExpense;
    const catName = translations[currentLang][item.category] || item.category;

    return `
      <tr>
        <td>${item.date}</td>
        <td><strong>${catName}</strong></td>
        <td>${item.note || '-'}</td>
        <td>${getPaymentLabel(item.paymentMethod)}</td>
        <td><span class="trans-badge">${typeLabel}</span></td>
        <td class="text-right ${amountClass}"><strong>${isIncome ? '+' : '-'}₹${parseFloat(item.amount).toLocaleString('en-IN')}</strong></td>
        <td class="text-center">
          <div class="action-btns">
            <button onclick="editTransaction('${item.id}')" class="btn-icon-sm" title="Edit"><i data-lucide="edit-3"></i></button>
            <button onclick="deleteTransaction('${item.id}')" class="btn-icon-sm" title="Delete" style="color: var(--accent-expense);"><i data-lucide="trash-2"></i></button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

function getPaymentLabel(key) {
  switch (key) {
    case 'gpay': return translations[currentLang].payGpay;
    case 'cash': return translations[currentLang].payCash;
    case 'card': return translations[currentLang].payCard;
    case 'bank': return translations[currentLang].payBank;
    default: return key;
  }
}

// --- Chart Visualizations ---
function updateCharts() {
  const monthData = getFilteredByMonth(transactions, selectedDate);
  const isDark = currentTheme === 'dark';
  const textColor = isDark ? '#cbd5e1' : '#334155';

  // 1. Category Pie Chart
  const categoryExpenses = {};
  monthData.filter(t => t.type === 'expense').forEach(t => {
    const catName = translations[currentLang][t.category] || t.category;
    categoryExpenses[catName] = (categoryExpenses[catName] || 0) + parseFloat(t.amount);
  });

  const pieLabels = Object.keys(categoryExpenses);
  const pieValues = Object.values(categoryExpenses);
  const pieColors = ['#f43f5e', '#6366f1', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#64748b'];

  const ctxPie = document.getElementById('category-pie-chart')?.getContext('2d');
  if (ctxPie) {
    if (categoryChartInstance) categoryChartInstance.destroy();
    
    if (pieValues.length === 0) {
      ctxPie.clearRect(0, 0, 300, 200);
    } else {
      categoryChartInstance = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
          labels: pieLabels,
          datasets: [{
            data: pieValues,
            backgroundColor: pieColors,
            borderWidth: 2,
            borderColor: isDark ? '#131b2e' : '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'right',
              labels: { color: textColor, font: { family: 'Inter', size: 11 } }
            }
          }
        }
      });
    }
  }

  // 2. Monthly Comparison Bar Chart (Last 6 Months)
  const ctxBar = document.getElementById('monthly-bar-chart')?.getContext('2d');
  if (ctxBar) {
    if (barChartInstance) barChartInstance.destroy();

    const last6Months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - i, 1);
      last6Months.push(d);
    }

    const barLabels = last6Months.map(d => `${d.getMonth() + 1}/${d.getFullYear().toString().substring(2)}`);
    const incomeSeries = [];
    const expenseSeries = [];

    last6Months.forEach(d => {
      const mItems = getFilteredByMonth(transactions, d);
      const inc = mItems.filter(t => t.type === 'income').reduce((acc, t) => acc + parseFloat(t.amount), 0);
      const exp = mItems.filter(t => t.type === 'expense').reduce((acc, t) => acc + parseFloat(t.amount), 0);
      incomeSeries.push(inc);
      expenseSeries.push(exp);
    });

    barChartInstance = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: barLabels,
        datasets: [
          { label: translations[currentLang].typeIncome, data: incomeSeries, backgroundColor: '#10b981', borderRadius: 4 },
          { label: translations[currentLang].typeExpense, data: expenseSeries, backgroundColor: '#f43f5e', borderRadius: 4 }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { ticks: { color: textColor } },
          y: { ticks: { color: textColor }, grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' } }
        },
        plugins: {
          legend: { labels: { color: textColor } }
        }
      }
    });
  }

  // 3. Payment Methods Doughnut
  const ctxDoughnut = document.getElementById('payment-doughnut-chart')?.getContext('2d');
  if (ctxDoughnut) {
    if (doughnutChartInstance) doughnutChartInstance.destroy();

    const payTotals = {};
    monthData.forEach(t => {
      const label = getPaymentLabel(t.paymentMethod);
      payTotals[label] = (payTotals[label] || 0) + parseFloat(t.amount);
    });

    doughnutChartInstance = new Chart(ctxDoughnut, {
      type: 'pie',
      data: {
        labels: Object.keys(payTotals),
        datasets: [{
          data: Object.values(payTotals),
          backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ec4899']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { color: textColor } }
        }
      }
    });
  }
}

// --- CRUD Actions ---
function openTransactionModal(editId = null) {
  const modal = document.getElementById('transaction-modal');
  const form = document.getElementById('transaction-form');
  form.reset();

  document.getElementById('trans-date').valueAsDate = new Date();

  if (editId) {
    const item = transactions.find(t => t.id === editId);
    if (item) {
      document.getElementById('edit-id').value = item.id;
      document.getElementById('modal-title').innerText = translations[currentLang].editTransaction;
      
      const typeRadio = form.querySelector(`input[name="trans-type"][value="${item.type}"]`);
      if (typeRadio) {
        typeRadio.checked = true;
        updateTypeToggleStyles(item.type);
      }

      document.getElementById('trans-amount').value = item.amount;
      document.getElementById('trans-date').value = item.date;
      populateCategoryDropdowns();
      document.getElementById('trans-category').value = item.category;
      document.getElementById('trans-payment').value = item.paymentMethod;
      document.getElementById('trans-note').value = item.note || '';
    }
  } else {
    document.getElementById('edit-id').value = '';
    document.getElementById('modal-title').innerText = translations[currentLang].addTransaction;
    updateTypeToggleStyles('expense');
    populateCategoryDropdowns();
  }

  modal.classList.add('active');
}

function closeTransactionModal() {
  document.getElementById('transaction-modal').classList.remove('active');
}

function updateTypeToggleStyles(selectedType) {
  const expenseLabel = document.getElementById('type-label-expense');
  const incomeLabel = document.getElementById('type-label-income');
  
  if (selectedType === 'expense') {
    expenseLabel.classList.add('expense-active');
    incomeLabel.classList.remove('income-active');
  } else {
    incomeLabel.classList.add('income-active');
    expenseLabel.classList.remove('expense-active');
  }
}

function saveTransaction(e) {
  e.preventDefault();
  const editId = document.getElementById('edit-id').value;
  const type = document.querySelector('input[name="trans-type"]:checked').value;
  const amount = parseFloat(document.getElementById('trans-amount').value);
  const date = document.getElementById('trans-date').value;
  const category = document.getElementById('trans-category').value;
  const paymentMethod = document.getElementById('trans-payment').value;
  const note = document.getElementById('trans-note').value.trim();

  if (isNaN(amount) || amount <= 0) return;

  if (editId) {
    const idx = transactions.findIndex(t => t.id === editId);
    if (idx !== -1) {
      transactions[idx] = { id: editId, type, amount, date, category, paymentMethod, note };
    }
  } else {
    const newItem = {
      id: 't_' + Date.now(),
      type,
      amount,
      date,
      category,
      paymentMethod,
      note
    };
    transactions.push(newItem);
  }

  saveTransactions();
  closeTransactionModal();
  renderApp();
}

window.editTransaction = function(id) {
  openTransactionModal(id);
};

window.deleteTransaction = function(id) {
  if (confirm(translations[currentLang].confirmDelete)) {
    transactions = transactions.filter(t => t.id !== id);
    saveTransactions();
    renderApp();
  }
};

// --- Export & Backup Logic ---
function exportExcelCSV() {
  const monthData = getFilteredByMonth(transactions, selectedDate);
  if (monthData.length === 0) {
    alert(translations[currentLang].noTransactionsFound);
    return;
  }

  // BOM for Tamil UTF-8 encoding support in Excel
  let csvContent = "\uFEFF";
  csvContent += "Date,Type,Category,Note,Payment Method,Amount (INR)\n";

  monthData.forEach(t => {
    const catName = translations[currentLang][t.category] || t.category;
    const typeLabel = t.type === 'income' ? 'Income' : 'Expense';
    const payLabel = getPaymentLabel(t.paymentMethod);
    const sanitizedNote = (t.note || '').replace(/"/g, '""');
    csvContent += `"${t.date}","${typeLabel}","${catName}","${sanitizedNote}","${payLabel}",${t.amount}\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  
  const filename = `Varavu_Selavu_${selectedDate.getFullYear()}_${selectedDate.getMonth() + 1}.csv`;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function downloadBackupJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(transactions, null, 2));
  const link = document.createElement('a');
  link.setAttribute('href', dataStr);
  link.setAttribute('download', `Varavu_Selavu_Backup_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function restoreBackupJSON(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(evt) {
    try {
      const parsed = JSON.parse(evt.target.result);
      if (Array.isArray(parsed)) {
        transactions = parsed;
        saveTransactions();
        renderApp();
        alert(translations[currentLang].backupRestored);
      } else {
        alert(translations[currentLang].invalidBackup);
      }
    } catch (err) {
      alert(translations[currentLang].invalidBackup);
    }
  };
  reader.readAsText(file);
}

function clearAllData() {
  if (confirm(translations[currentLang].confirmClear)) {
    transactions = [];
    saveTransactions();
    renderApp();
  }
}

// --- GPay / UPI Auto Parser Logic ---
function parseAndImportGPayText() {
  const inputElem = document.getElementById('gpay-text-input');
  const text = inputElem ? inputElem.value.trim() : '';

  if (!text) {
    alert(currentLang === 'ta' ? 'தயவுசெய்து GPay SMS அல்லது உரையை ஒட்டவும்!' : 'Please paste GPay text or SMS!');
    return;
  }

  const lines = text.split('\n');
  let addedCount = 0;
  const todayStr = new Date().toISOString().slice(0, 10);

  lines.forEach((line, index) => {
    if (!line.trim()) return;

    // Match amount e.g. ₹450.00, Rs 1200, 1,450
    const amountMatch = line.match(/(?:₹|rs\.?|inr)?\s*([0-9,]+(?:\.[0-9]{1,2})?)/i);
    if (!amountMatch) return;

    let amountVal = parseFloat(amountMatch[1].replace(/,/g, ''));
    if (isNaN(amountVal) || amountVal <= 0) return;

    const lowerLine = line.toLowerCase();

    // Type detection: Income vs Expense
    let type = 'expense';
    if (lowerLine.includes('received') || lowerLine.includes('credited') || lowerLine.includes('பெறப்பட்டது') || lowerLine.includes('salary')) {
      type = 'income';
    }

    // Category auto detection
    let category = type === 'income' ? 'catSalary' : 'catOther';
    if (lowerLine.includes('swiggy') || lowerLine.includes('zomato') || lowerLine.includes('food') || lowerLine.includes('hotel') || lowerLine.includes('restaurant')) {
      category = 'catFood';
    } else if (lowerLine.includes('eb') || lowerLine.includes('tangedco') || lowerLine.includes('electricity') || lowerLine.includes('jio') || lowerLine.includes('airtel') || lowerLine.includes('bill')) {
      category = 'catBills';
    } else if (lowerLine.includes('rent') || lowerLine.includes('வாடகை')) {
      category = 'catRent';
    } else if (lowerLine.includes('petrol') || lowerLine.includes('hp') || lowerLine.includes('iocl') || lowerLine.includes('bpcl') || lowerLine.includes('uber') || lowerLine.includes('ola')) {
      category = 'catTravel';
    } else if (lowerLine.includes('supermarket') || lowerLine.includes('groceries') || lowerLine.includes('mart') || lowerLine.includes('vegetables') || lowerLine.includes('மளிகை')) {
      category = 'catGroceries';
    }

    // Extract Date if present
    let dateStr = todayStr;
    const dateMatch = line.match(/(\d{4}-\d{2}-\d{2})|(\d{1,2}\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*\d{0,4})/i);
    if (dateMatch) {
      try {
        const parsedD = new Date(dateMatch[0]);
        if (!isNaN(parsedD.getTime())) {
          dateStr = parsedD.toISOString().slice(0, 10);
        }
      } catch (e) {}
    }

    // Clean note
    let note = line.replace(/paid|sent|received|credited|debited|to|from|on|₹|rs\.?/gi, '').trim();
    if (!note) note = type === 'income' ? 'GPay வரவு' : 'GPay செலவு';

    // Push new transaction
    transactions.push({
      id: 'gpay_' + Date.now() + '_' + index,
      type,
      amount: amountVal,
      date: dateStr,
      category,
      paymentMethod: 'gpay',
      note: note
    });

    addedCount++;
  });

  if (addedCount > 0) {
    saveTransactions();
    inputElem.value = '';
    document.getElementById('gpay-modal').classList.remove('active');
    renderApp();
    alert(currentLang === 'ta' ? `${addedCount} GPay பதிவுகள் தானாகக் கணக்கில் சேர்க்கப்பட்டன!` : `Successfully auto-imported ${addedCount} GPay transactions!`);
  } else {
    alert(currentLang === 'ta' ? 'GPay வரிகளை சரியாக அடையாளம் காண முடியவில்லை. தொகையுடன் மேசேஜ் உள்ளதா என சரிபார்க்கவும்.' : 'Could not parse GPay lines. Please ensure text has amounts.');
  }
}

// --- Event Listeners Binding ---
function bindEvents() {
  // Theme & Language
  document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);
  document.getElementById('lang-toggle-btn')?.addEventListener('click', toggleLanguage);

  // Month navigation
  document.getElementById('prev-month')?.addEventListener('click', () => {
    selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1);
    renderApp();
  });
  document.getElementById('next-month')?.addEventListener('click', () => {
    selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
    renderApp();
  });

  // Navigation Items
  document.querySelectorAll('.nav-item[data-target]').forEach(item => {
    item.addEventListener('click', () => switchView(item.getAttribute('data-target')));
  });
  document.getElementById('see-all-btn')?.addEventListener('click', () => switchView('view-transactions'));

  // Modals & FAB
  document.getElementById('fab-add-btn')?.addEventListener('click', () => openTransactionModal());
  document.getElementById('add-nav-trigger')?.addEventListener('click', () => openTransactionModal());
  document.querySelectorAll('.close-modal-btn').forEach(btn => btn.addEventListener('click', closeTransactionModal));

  // GPay Auto Import Modal
  document.getElementById('gpay-import-btn')?.addEventListener('click', () => {
    document.getElementById('gpay-modal').classList.add('active');
  });
  document.querySelectorAll('.close-gpay-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => document.getElementById('gpay-modal').classList.remove('active'));
  });
  document.getElementById('process-gpay-btn')?.addEventListener('click', parseAndImportGPayText);

  // Type Radio Buttons Toggle Styling & Category Update
  document.querySelectorAll('input[name="trans-type"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      updateTypeToggleStyles(e.target.value);
      populateCategoryDropdowns();
    });
  });

  // Transaction Form
  document.getElementById('transaction-form')?.addEventListener('submit', saveTransaction);

  // Filters & Search
  document.getElementById('search-input')?.addEventListener('input', renderTransactionsTable);
  document.getElementById('filter-type')?.addEventListener('change', renderTransactionsTable);
  document.getElementById('filter-category')?.addEventListener('change', renderTransactionsTable);

  // Budget Modal
  document.getElementById('edit-budget-btn')?.addEventListener('click', () => {
    document.getElementById('budget-input').value = monthlyBudget;
    document.getElementById('budget-modal').classList.add('active');
  });
  document.querySelectorAll('.close-budget-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => document.getElementById('budget-modal').classList.remove('active'));
  });
  document.getElementById('budget-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = parseFloat(document.getElementById('budget-input').value);
    if (!isNaN(val) && val >= 0) {
      monthlyBudget = val;
      localStorage.setItem('app_budget', monthlyBudget);
      document.getElementById('budget-modal').classList.remove('active');
      renderApp();
    }
  });

  // Backup & Export
  document.getElementById('export-excel-btn')?.addEventListener('click', exportExcelCSV);
  document.getElementById('backup-download-btn')?.addEventListener('click', downloadBackupJSON);
  document.getElementById('restore-file-input')?.addEventListener('change', restoreBackupJSON);
  document.getElementById('clear-all-data-btn')?.addEventListener('click', clearAllData);
}

