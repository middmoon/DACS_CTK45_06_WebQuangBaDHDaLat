// Dữ liệu về các tòa nhà
const buildings = [
  {
    id: 'A1',
    title: 'Tên tòa nhà A1',
    images: ['./assets/Thang/a1_giua.jpg', './assets/Thang/a1_phai.jpg', './assets/Thang/a1_trai.jpg'],
    description: 'Các hình ảnh  tòa nhà A1'
  },
  {
    id: 'A2',
    title: 'Tên tòa nhà A2',
    images: ['./assets/Thang/a2_trai.jpg', './assets/Thang/a2_trai.jpeg','./assets/Thang/a2_phai.jpeg',  ],
    description: 'Các hình ảnh  tòa nhà A2'
  },
  {
    id:'Hodaihoc',
    title:'Ho dai hoc',
    images:['./assets/Thang/ho_4.jpeg', './assets/Thang/ho_3.jpeg', './assets/Thang/ho_2.jpeg', './assets/Thang/ho_1.jpeg', ],
    description:'Các hình ảnh hồ Đại học'
  },
  {
    id:'A31',
    title:'Tên tòa nhà A31',
    images:['./assets/Thang/a31_4.jpeg', './assets/Thang/a31_1.jpeg', './assets/Thang/a31_2.jpeg','./assets/Thang/a31_3.jpeg',
    './assets/Thang/a31.1.jpeg','./assets/Thang/a31.jpeg',
    ],
    description:'Các hình ảnh  tòa nhà A31'
  },
  {
    id:'Baovesau',
    title:'Nhà bảo vệ cổng sau',
    images:['./assets/Thang/bvsau.jpg', './assets/Thang/bvsau_1.jpeg', './assets/Thang/bvsau_2.jpeg', './assets/Thang/bvsau_3.jpeg', 
    './assets/Thang/bvsau_3.jpeg', './assets/Thang/bvsau_4.jpeg', './assets/Thang/bvsau_5.jpeg', './assets/Thang/bvsau_6.jpeg', 
    ],
    description:'Các hình ảnh nhà bảo vệ cổng sau'
  },
  {
    id:'TTTT_TV',
    title:'Trung tâm Thông tin-Thư viện',
    images:['./assets/Thang/TT_T.1.jpeg', './assets/Thang/tt-tv2.jpeg', 

    ],
    description:'Các hình ảnh tòa Trung tâm Thông tin-Thư viện'
  },
  {
    id:'A24',
    title:'Tòa nhà A24',
    images:['./assets/Thang/a24_1.jpeg', './assets/Thang/a24_phai1.jpg', './assets/Thang/a24_phai.jpg','./assets/Thang/a24_truoc2.jpg',
    './assets/Thang/a24_truoc1.jpg','./assets/Thang/a24_sau.jpg '
    ],
    description:'Các hình ảnh Tòa nhà A24'
  },
  {
    id:'A25',
    title:'Tòa nhà A25',
    images:['./assets/Thang/a25_4.jpeg', './assets/Thang/a25_3.jpeg', './assets/Thang/a25_2.jpeg', 
    './assets/Thang/a25_1.jpeg', './assets/Thang/a25.jpeg', 
    ],
    description:'Các hình ảnh Tòa nhà A25'
  },
  {
    id:'A6',
    title:'Tòa nhà A6',
    images:['./assets/Thang/a6_phai.jpg', './assets/Thang/a6_truoc.jpg', './assets/Thang/a6_trai.jpg', './assets/Thang/a6_2.jpg', 
    './assets/Thang/a6_1.jpg', './assets/Thang/a6.jpg', 
    ],
    description:'Các hình ảnh Tòa nhà A6'
  },
  {
    id:'HTTN',
    title:'Tòa hội trường thống nhất',
    images:['./assets/Thang/httn_2.jpeg', './assets/Thang/httn_truoc.jpg', './assets/Thang/httn_3.jpeg', 
    './assets/Thang/httn_trai.jpg', './assets/Thang/httn_trai1.jpg', './assets/Thang/httn_sau.jpg', 
    ],
    description:'Các hình ảnh Tòa hội trường thống nhất'
  },
  {
    id:'TV',
    title:'Tòa nhà thư viện(cũ)',
    images:['./assets/Thang/tv_giua.jpg', './assets/Thang/tv_duoi.jpg', './assets/Thang/tv_phai.jpg', './assets/Thang/tv_trai.jpg', 
    './assets/Thang/tv_4.jpeg', './assets/Thang/tv_3.jpeg', './assets/Thang/tv_1.jpeg',  
    ],
    description:'Các hình ảnh Tòa nhà thư viện(cũ)'
  },
  {
    id:'A30',
    title:'Tòa nhà A30',
    images:['./assets/Thang/a30_1.jpg', './assets/Thang/a30_2.jpg', './assets/Thang/a30_3.jpg'

    ],
    description:'Các hình ảnh Tòa nhà A30'
  },
  {
    id:'A27',
    title:'Tòa nhà A27',
    images:['./assets/Thang/a27_1.jpeg', './assets/Thang/a27_2.jpeg', './assets/Thang/a27_3.jpeg',
    ],
    description:'Các hình ảnh Tòa nhà A27'
  },
  {
    id:'A5',
    title:'Tòa nhà A5',
    images:['./assets/Thang/a5_phai.jpg', './assets/Thang/a5_truoc.jpg', './assets/Thang/a5_giua.jpg', 

    ],
    description:'Các hình ảnh Tòa nhà A5'
  },
  {
    id:'A3',
    title:'Tòa nhà A3',
    images:['./assets/Thang/a3_giua.jpg', './assets/Thang/a3_giua1.jpg', './assets/Thang/a3_giua2.jpg',
    './assets/Thang/a3_phai.jpg','./assets/Thang/a3_sau.jpg','./assets/Thang/a3_trai.jpg'
    ],
    description:'Các hình ảnh Tòa nhà A3'
  },
  {
    id:'A4',
    title:'Tòa nhà A4',
    images:['./assets/Thang/a4_2.jpeg', './assets/Thang/a4_1.jpeg', 

    ],
    description:'Các hình ảnh Tòa nhà A4'
  },
  {
    id:'Baovetruoc',
    title:'Nhà bảo vệ cổng trước',
    images:['./assets/Thang/nhaxe1.jpg', './assets/Thang/nhaxe.2.jpg', 
    './assets/Thang/nhaxe.1.jpg',
    ],
    description:'Các hình ảnh Nhà bảo vệ cổng trước'
  },
  {
    id:'SK',
    title:'Khu vực sự kiện',
    images:['./assets/Thang/sk2.jpeg', './assets/Thang/sk_trai.jpeg',  './assets/Thang/sk2.jpeg', './assets/Thang/sk_1.jpeg',

    ],
    description:'Các hình ảnh Khu vực sự kiện'
  },
  {
    id:'A8',
    title:'Tòa nhà A8',
    images:['./assets/Thang/a8.1.jpeg', './assets/Thang/A8.jpeg', 

    ],
    description:'Các hình ảnh Tòa nhà A8'
  },
  {
    id:'A7',
    title:'Tòa nhà A7',
    images:['./assets/Thang/tao1.gif', './assets/Thang/tao2.gif', 

    ],
    description:'Các hình ảnh Tòa nhà A7'
  },
  {
    id:'A18',
    title:'Tòa nhà A18',
    images:['./assets/Thang/a18__2.jpeg', './assets/Thang/a18__3.jpeg', 
    './assets/Thang/a18__1.jpeg','./assets/Thang/a18_1.jpeg','./assets/Thang/a18_2.jpeg',
    './assets/Thang/a18_3.jpeg','./assets/Thang/a18_4.jpeg',
    ],
    description:'Các hình ảnh Tòa nhà A18'
  },
  {
    id:'A19',
    title:'Tòa nhà A19',
    images:['./assets/Thang/a19_2.jpeg', './assets/Thang/a19_1.jpeg', 
    './assets/Thang/a19_3.jpeg',
    ],
    description:'Các hình ảnh Tòa nhà A19'
  },
  {
    id:'A20',
    title:'Tòa nhà A20',
    images:['./assets/Thang/a20_1.jpg', './assets/Thang/a20_2.jpg', 

    ],
    description:'Các hình ảnh Tòa nhà A20'
  },
  {
    id:'Sanbongda',
    title:'Khu vực sân bóng đá',
    images:['./assets/Thang/sanbd.jpeg', './assets/Thang/sanbd1.jpg', 

    ],
    description:'Các hình ảnh Khu vực sân bóng đá'
  },
  {
    id:'Nhathidau',
    title:'Tòa nhà thi đáu thể thao',
    images:['./assets/Thang/nhatd_1.jpeg', './assets/Thang/nhatd_2.jpeg',  './assets/Thang/nhatd_3.jpeg', 

    ],
    description:'Các hình ảnh Tòa nhà thi đáu thể thao'
  },
  {
    id:'A16',
    title:'Tòa nhà A16',
    images:['./assets/Thang/a16_4.jpeg', './assets/Thang/a16_3.jpeg', './assets/Thang/a16_2.jpeg', 
    './assets/Thang/a16_11.jpeg', 
    ],
    description:'Các hình ảnh Tòa nhà A16'
  },
  {
    id:'A11',
    title:'Tòa nhà A11',
    images:['./assets/Thang/a11.jpg', './assets/Thang/a11_1.jpg', 
    './assets/Thang/a11_4.jpg', './assets/Thang/a11_3.jpg', './assets/Thang/a11_5.jpg', 
    ],
    description:'Các hình ảnh Tòa nhà A11'
  },
];
let createdBuildings = [] //cờ
function createSlideshowDiv(buildingId) {
    // kỹ thuật đặt cờ
  if (createdBuildings.includes(buildingId)) {
    return;
  }
  //Tìm id trong buildings
  const building = buildings.find(item => item.id === buildingId);
  if (!building) {
    return;
  }
  
  const existingSlideshowDiv = document.getElementById(building);
  if (existingSlideshowDiv) {
    return;
  }
  //Thêm H2 vào building-info div
  const idChildDiv= document.getElementById(`${buildingId}`);
  const buildingTitle =document.createElement('h2');
  buildingTitle.innerText=building.title;
  idChildDiv.appendChild(buildingTitle);
  //Thêm div có classname= slideshow vào building-info
  const slide= document.createElement('div');
  slide.className="slideshow";
  idChildDiv.appendChild(slide);
  //Thêm div có classname= slideshow-container vào slideshow
  const slideContainer= document.createElement('div');
  slideContainer.className="slideshow-container";
  slide.appendChild(slideContainer);
  //Thêm div có classname=slideshow-images vào slideshow-container
  const slideImages= document.createElement('div');
  slideImages.className="slideshow-images";
  slideContainer.appendChild(slideImages);
  //Thêm a nút chuyển ảnh trước vào slideshow-container
  const  prevButton =document.createElement('a');
  prevButton.className = 'slideshow-prev';
  prevButton.innerHTML = '&#10094;'; 
  prevButton.setAttribute('onclick', `changeSlide(event, -1, '${buildingId}')`);
  slideContainer.appendChild(prevButton);
  //Thêm a nút chuyển ảnh tiếp vào slideshow-container
  const nextButton = document.createElement('a');
   nextButton.className = 'slideshow-next';
    nextButton.innerHTML='&#10095;';
   nextButton.setAttribute('onclick', `changeSlide(event, 1, '${buildingId}')`);
  slideContainer.appendChild(nextButton);
  //Thêm các dấu chấm vào slideshow-container
  const slideDots= document.createElement('div');
  slideDots.className='slideshow-dots';
  slideContainer.appendChild(slideDots);
  //Thêm mô tả vào div slide-show
   const buildingDescription = document.createElement('p');
   buildingDescription.className = 'building-description';
   buildingDescription.textContent = building.description;
   idChildDiv.appendChild(buildingDescription);
  //Đẩy id buildingid vào mảng 
   createdBuildings.push(buildingId);
   createSlideShow(buildingId);
}

 // Hàm tạo slide-show cho tòa nhà
 function createSlideShow(buildingId) {
  const building = buildings.find(item => item.id === buildingId);
  if (!building) {
    return;
  }
  const prevButton= document.querySelector('.slideshow-prev');
  const nextButton= document.querySelector('.slideshow-next');
  const buildingInfo = document.getElementById(`${buildingId}`);
  const slideshowImages = buildingInfo.querySelector('.slideshow-images');
  const slideshowDots = buildingInfo.querySelector('.slideshow-dots');
let slideIndex=0;
let timer;
  // Đặt tiêu đề và mô tả tòa nhà
   //buildingTitle.textContent = building.title;
  // buildingDescription.textContent = building.description;
  // Xóa hết các hình ảnh và dấu chấm hiện tại (nếu có)
  slideshowImages.innerHTML = null;
  slideshowDots.innerHTML =null;
  // Tạo hình ảnh và dấu chấm mới
  building.images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;
    slideshowImages.appendChild(img);
    const dot = document.createElement('span');
    dot.classList.add('slideshow-dot');
    dot.setAttribute('data-index', index);
    dot.addEventListener('click',handleDotClick);
    slideshowDots.appendChild(dot);
  });
  // Hiển thị slide đầu tiên
  showSlide(slideIndex, buildingId);
  //Chay slide automatic
  function startTimer() {
    timer = setInterval(() => {
      slideIndex++;
      if (slideIndex >= building.images.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex, buildingId);
    }, 2000); //Chuyển sang slide khác mỗi 2giay
  }
   //Handle click on dots
   function handleDotClick(event, index ){
    event.preventDefault();
    const dotIndex= parseInt(event.target.getAttribute('data-index'));
    slideIndex=dotIndex;
    showSlide(slideIndex,buildingId);
    if(!timer){
      startTimer();
    }
   }
    // Handle click on previous button
function handlePrevClick(event) {
  event.preventDefault();
  slideIndex=(slideIndex-1+building.images.length)%building.images.length;
  if (slideIndex < 0) {
    slideIndex = building.images.length - 1;
  }
  showSlide(slideIndex, buildingId);
  if (!timer) {
    startTimer();
  }
}
// Handle click on next button
function handleNextClick(event) {
  event.preventDefault();
  slideIndex= (slideIndex+1)%building.images.length;
  if (slideIndex >= building.images.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex, buildingId);
  if (!timer) {
    startTimer();
  }
}
    // Add event listeners
prevButton.addEventListener('click',handlePrevClick);
nextButton.addEventListener('click',handleNextClick);
// Start the timer initially
startTimer();
}
// Hàm hiển thị slide
function showSlide(slideIndex, buildingId) {
  const buildingInfo = document.getElementById(`${buildingId}`);
  const slides = buildingInfo.querySelectorAll('.slideshow-images img');
  const dots = buildingInfo.querySelectorAll('.slideshow-dot');
  // Ẩn tất cả các slide và dấu chấm
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  // Hiển thị slide và dấu chấm tương ứng với slideIndex
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}
// Hàm chuyển slide
function changeSlide(event, n, buildingId) {
  event.preventDefault();
  const buildingInfo = document.getElementById(`${buildingId}`);
  const slides = buildingInfo.querySelectorAll('.slideshow-images img');
  const dots = buildingInfo.querySelectorAll('.slideshow-dot');
  let currentSlideIndex=0;
  // Tìm slide hiện tại
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === 'block') {
      currentSlideIndex=i;
      break;
    }
  }
let slideIndex =(currentSlideIndex+n+slides.length)%slides.length;
  // Hiển thị slide mới
  showSlide(slideIndex, buildingId);
}

// Hàm chuyển tới slide khi bấm vào dấu chấm
function goToSlide(event, slideIndex, buildingId) {
  event.preventDefault();
  showSlide(slideIndex, buildingId);
}

document.addEventListener('DOMContentLoaded', function() {
  var firsttimeMap = document.querySelector('.firsttime-panel');
  var mapPanel = document.querySelector('.map-panel');
  var buildingPanel = document.querySelector('.building-panel');

  firsttimeMap.addEventListener('click', function() {
    firsttimeMap.classList.add('hidden');
    mapPanel.classList.remove('hidden');
    buildingPanel.classList.remove('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var tooltip = document.querySelector('.firsttime-panel .tooltip');
  var areas = document.querySelectorAll('.firsttime-panel area');
  areas.forEach(function(area) {
    area.addEventListener('mouseover', function(e) {
      tooltip.style.display = 'block';
      updateTooltipPosition(e);
    });
    area.addEventListener('mousemove', function(e) {
      updateTooltipPosition(e);
    });
    area.addEventListener('mouseout', function() {
      tooltip.style.display = 'none';
    });
    function updateTooltipPosition(e) {
      var mouseX = e.pageX+10;
      var mouseY = e.pageY+10;
      tooltip.style.left = mouseX + 'px';
      tooltip.style.top = mouseY + 'px';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var mapImage = document.getElementById('mappic');
  var originalHeight = mapImage.naturalHeight;
  var adjustedHeight = mapImage.clientHeight;
  var adjustmentFactor = adjustedHeight / originalHeight;

  var areas = document.querySelectorAll('area');
  
  areas.forEach(function(area) {
    var originalCoords = area.getAttribute('coords').split(',');
    var adjustedCoords = originalCoords.map(function(coord) {
      return Math.round(coord * adjustmentFactor);
    });
    area.setAttribute('coords', adjustedCoords.join(','));
  });
});

function goBack() {
  window.location.href = "index.html";
}