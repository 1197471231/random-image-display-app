// 图片URL数组
const imageUrls = [
    'https://picsum.photos/300/200',
    'https://picsum.photos/300/201',
    'https://picsum.photos/300/202',
    'https://picsum.photos/300/203',
    'https://picsum.photos/300/204',
    'https://picsum.photos/300/205',
    'https://picsum.photos/300/206',
    'https://picsum.photos/300/207',
    'https://picsum.photos/300/208',
    'https://picsum.photos/300/209'
];

// 获取DOM元素
const imageContainer = document.getElementById('image-container');
const refreshBtn = document.getElementById('refresh-btn');

// 跟踪已展示图片的索引
let shownIndices = [];

// 显示均衡分布的图片
function displayBalancedImage() {
    // 如果所有图片都已展示过，重置跟踪数组
    if (shownIndices.length === imageUrls.length) {
        shownIndices = [];
    }
    
    // 获取未展示的图片索引
    const availableIndices = imageUrls.map((_, index) => index)
        .filter(index => !shownIndices.includes(index));
    
    // 随机选择一个未展示的图片
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    
    // 记录已展示的图片索引
    shownIndices.push(randomIndex);
    
    const img = document.createElement('img');
    img.src = imageUrls[randomIndex];
    img.alt = '随机图片';
    
    // 清空容器并添加新图片
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
}

// 初始化显示一张图片
displayBalancedImage();

// 添加按钮点击事件
refreshBtn.addEventListener('click', displayBalancedImage);