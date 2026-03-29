// ========== 数据定义 ==========
const lipGlossary = [
    { id: 1, term: "芭比粉", brand: "YSL", hex: "#FF69B4", plainExplanation: "高饱和度的亮粉色，荧光感强，俗称“死亡芭比粉”", skinToneHint: "白皮也易显黑，黄皮绝对慎选", manTranslation: "就是很亮很亮的粉红色，涂上像芭比娃娃，但现实中容易显土气，非冷白皮别碰。", lipstickExample: "YSL 方管52", colorFamily: "粉色系", tags: ["荧光", "冷调", "高饱和", "显黑"] },
    { id: 2, term: "正红色", brand: "Dior", hex: "#C4252C", plainExplanation: "经典大红色，气场全开，不偏橘不偏蓝", skinToneHint: "几乎所有肤色都能驾驭，显白首选", manTranslation: "就是那种很正很浓的红，涂上像红毯明星，气场拉满。", lipstickExample: "Dior 999", colorFamily: "红色系", tags: ["经典", "显白", "不挑皮", "气场强"] },
    { id: 3, term: "豆沙色", brand: "NARS", hex: "#A65D48", plainExplanation: "介于粉色与棕色之间，温柔知性，日常百搭", skinToneHint: "黄皮友好，素颜可用，不突兀", manTranslation: "像红豆沙一样的颜色，涂上很自然，不浓不淡，日常不出错。", lipstickExample: "NARS Dolce Vita", colorFamily: "粉色系", tags: ["温柔", "日常", "素颜友好", "黄皮友好"] },
    { id: 4, term: "枫叶红", brand: "MAC", hex: "#B3413A", plainExplanation: "红棕色中带橘调，像秋天的枫叶，复古又显白", skinToneHint: "黄皮亲妈，显白一级棒", manTranslation: "红里透点橘，像秋天的叶子，涂上很显白，不挑人。", lipstickExample: "MAC Chili", colorFamily: "红色系", tags: ["橘棕", "复古", "显白", "秋冬"] },
    { id: 5, term: "烂番茄", brand: "Armani", hex: "#E85D2E", plainExplanation: "浓郁的橘红色，像熟透的番茄，显白又有活力", skinToneHint: "黄皮挚爱，显白不荧光", manTranslation: "橘红色，像番茄酱的颜色，涂上很亮眼，巨显白。", lipstickExample: "Armani 红管405", colorFamily: "橘色系", tags: ["橘红", "显白", "黄皮友好", "丝绒"] },
    { id: 6, term: "奶茶色", brand: "Bobbi Brown", hex: "#C9A690", plainExplanation: "温柔的裸调棕粉色，像奶茶一样柔和", skinToneHint: "不挑肤色，适合通勤淡妆", manTranslation: "就是奶茶那种颜色，涂上很温柔，低调有气质。", lipstickExample: "Bobbi Brown Claret", colorFamily: "棕色系", tags: ["裸粉", "温柔", "日常", "不挑皮"] },
    { id: 7, term: "梅子色", brand: "3CE", hex: "#8E4B6E", plainExplanation: "紫色调浆果色，冷艳气质，适合秋冬", skinToneHint: "白皮显气质，黄皮需带妆", manTranslation: "像梅子一样的紫红色，涂上很有气场，但黄皮不化妆容易显黑。", lipstickExample: "3CE Know Better", colorFamily: "紫色系", tags: ["紫调", "冷艳", "秋冬", "挑妆"] },
    { id: 8, term: "西柚色", brand: "MAC", hex: "#F3A28C", plainExplanation: "粉橘调，像西柚果肉，清新减龄", skinToneHint: "白皮显嫩，黄皮可用但别太荧光", manTranslation: "粉橘色，像西柚肉，涂上显得年轻活泼，适合夏天。", lipstickExample: "MAC See Sheer", colorFamily: "橘色系", tags: ["粉橘", "减龄", "清新", "日常"] },
    { id: 9, term: "土棕色", brand: "Pat McGrath", hex: "#8B5A3A", plainExplanation: "棕色调明显，带土感，欧美妆标配", skinToneHint: "白皮涂很高级，黄皮需气场驾驭", manTranslation: "土一样的棕色，涂上像欧美模特，很酷但可能显成熟。", lipstickExample: "Pat McGrath Omi", colorFamily: "棕色系", tags: ["棕色", "欧美", "高级", "挑人"] },
    { id: 10, term: "紫调浆果色", brand: "YSL", hex: "#C43A6B", plainExplanation: "紫红色偏深，像浆果汁液，气场强大", skinToneHint: "冷白皮显白，黄皮需要全妆", manTranslation: "紫红色的口红，涂上像吸血鬼女王，很显眼但挑人，全妆才hold住。", lipstickExample: "YSL 黑管409", colorFamily: "紫色系", tags: ["紫红", "气场", "秋冬", "浓妆必备"] }
];

// 获取所有颜色分类（用于标签筛选）
function getAllColorFamilies() {
    const families = new Set();
    lipGlossary.forEach(item => {
        if (item.colorFamily) families.add(item.colorFamily);
    });
    return Array.from(families).sort();
}

// 全局状态
let currentKeyword = "";
let activeColorFamilies = new Set();

// DOM 元素
const searchInput = document.getElementById('searchInput');
const tagFilterGroup = document.getElementById('tagFilterGroup');
const cardsContainer = document.getElementById('cardsContainer');
const resultCountSpan = document.getElementById('resultCount');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const resetFilterBtn = document.getElementById('resetFilterBtn');
const modalMask = document.getElementById('detailModal');
const closeModalBtn = document.getElementById('closeModalBtn');

// 筛选逻辑（搜索只匹配 term，颜色分类 OR 逻辑）
function filterGlossary() {
    let filtered = [...lipGlossary];

    if (currentKeyword.trim() !== "") {
        const kw = currentKeyword.trim().toLowerCase();
        filtered = filtered.filter(item => item.term.toLowerCase().includes(kw));
    }

    if (activeColorFamilies.size > 0) {
        filtered = filtered.filter(item => activeColorFamilies.has(item.colorFamily));
    }

    return filtered;
}

// 判断是否为空状态（无搜索词且无筛选）
function isEmptyState() {
    return currentKeyword.trim() === "" && activeColorFamilies.size === 0;
}

// 渲染卡片
function renderCards() {
    const filteredAll = filterGlossary();
    let displayData = filteredAll;

    if (isEmptyState()) {
        displayData = lipGlossary.slice(0, 4);
        resultCountSpan.innerText = `${displayData.length} 条黑话 (示例)`;
    } else {
        resultCountSpan.innerText = `${displayData.length} 条黑话`;
    }

    if (displayData.length === 0) {
        cardsContainer.innerHTML = `<div class="no-result">🤔 没找到这个颜色名称…<br>试试其他关键词或重置筛选</div>`;
        clearSearchBtn.style.display = currentKeyword.trim() !== "" ? "inline-block" : "none";
        return;
    }

    let html = '';
    displayData.forEach(item => {
        html += `
            <div class="dict-card" data-id="${item.id}">
                <div class="color-block" style="background-color: ${item.hex};"></div>
                <div class="card-content">
                    <div class="term">${escapeHtml(item.term)}</div>
                    <div class="simple-explanation">${escapeHtml(item.plainExplanation)}</div>
                    <div class="skin-hint">👤 ${escapeHtml(item.skinToneHint)}</div>
                    <div class="example"><span>💄 代表色号：</span>${escapeHtml(item.lipstickExample)}</div>
                </div>
            </div>
        `;
    });
    cardsContainer.innerHTML = html;

    // 绑定卡片点击事件
    document.querySelectorAll('.dict-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.getAttribute('data-id'));
            const item = lipGlossary.find(g => g.id === id);
            if (item) openModal(item);
        });
    });

    clearSearchBtn.style.display = currentKeyword.trim() !== "" ? "inline-block" : "none";
}

// 渲染颜色分类标签
function renderTagFilters() {
    const families = getAllColorFamilies();
    tagFilterGroup.innerHTML = '';
    families.forEach(family => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        if (activeColorFamilies.has(family)) tagSpan.classList.add('active');
        tagSpan.innerText = family;
        tagSpan.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeColorFamilies.has(family)) {
                activeColorFamilies.delete(family);
            } else {
                activeColorFamilies.add(family);
            }
            renderTagFilters();
            renderCards();
        });
        tagFilterGroup.appendChild(tagSpan);
    });
}

// 重置所有筛选
function resetAllFilters() {
    currentKeyword = "";
    searchInput.value = "";
    activeColorFamilies.clear();
    renderTagFilters();
    renderCards();
}

// 清空搜索框
function clearSearchOnly() {
    currentKeyword = "";
    searchInput.value = "";
    renderCards();
}

// 打开详情弹窗
function openModal(item) {
    document.getElementById('modalColorBlock').style.backgroundColor = item.hex;
    document.getElementById('modalTerm').innerText = item.term;
    document.getElementById('modalBrand').innerText = item.brand || '';
    document.getElementById('modalHex').innerText = item.hex;
    document.getElementById('modalExplanation').innerText = item.plainExplanation;
    document.getElementById('modalSkinHint').innerHTML = `🎨 肤色适配：${escapeHtml(item.skinToneHint)}`;
    document.getElementById('modalExample').innerHTML = `💄 代表色号：${escapeHtml(item.lipstickExample)}`;
    document.getElementById('manTranslationText').innerText = item.manTranslation;
    const tagsContainer = document.getElementById('modalTagsContainer');
    tagsContainer.innerHTML = (item.tags || []).map(tag => `<span class="modal-tag">${escapeHtml(tag)}</span>`).join('');
    modalMask.classList.add('active');
}

function closeModal() {
    modalMask.classList.remove('active');
}

// 辅助函数：防XSS
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// 事件绑定
function bindEvents() {
    searchInput.addEventListener('input', (e) => {
        currentKeyword = e.target.value;
        renderCards();
    });

    clearSearchBtn.addEventListener('click', clearSearchOnly);
    resetFilterBtn.addEventListener('click', resetAllFilters);
    closeModalBtn.addEventListener('click', closeModal);
    modalMask.addEventListener('click', (e) => {
        if (e.target === modalMask) closeModal();
    });
}

// 初始化
function init() {
    bindEvents();
    renderTagFilters();
    renderCards();
}

init();
