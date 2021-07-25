import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Huy Pham",
      email: "admin@vivo.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: true,
    },
    {
      name: "Linh Phuong",
      email: "bokhun@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
    },
    {
      name: "Linh Phuonggg",
      email: "bokhunggg@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
    },
    {
      name: "admin1",
      email: "admin1@gmail.com",
      password: bcrypt.hashSync("123456", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      id: 1,
      image: "./assets/img/y51.png",
      name: "Vivo Y51",
      price: 3000000,
      oldPrice: 2800000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 2,
      image: "./assets/img/x50-640x640.png",
      name: "Vivo X50 Pro",
      price: 2750000,
      oldPrice: 2800000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "X",
    },
    {
      id: 3,
      image: "./assets/img/y20-640x640.png",
      name: "Vivo Y20",
      price: 2400000,
      oldPrice: 2800000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 4,
      image: "./assets/img/y51.png",
      name: " Vivo Y51",
      price: 3000000,
      oldPrice: 3250000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 5,
      image: "./assets/img/y12s-640x640.png",
      name: "Vivo Y12s",
      price: 2950000,
      oldPrice: 3000000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 6,
      image: "./assets/img/y51.png",
      name: "Vivo Y51",
      price: 3000000,
      oldPrice: 3200000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 7,
      image: "./assets/img/x50-640x640.png",
      name: "Vivo X50",
      price: 2300000,
      oldPrice: 2600000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "X",
    },
    {
      id: 8,
      image: "./assets/img/u10.png",
      name: "Vivo U10",
      price: 2800000,
      oldPrice: 2900000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "U",
    },
    {
      id: 9,
      image: "./assets/img/v20se.png",
      name: "Vivo V20SE",
      price: 2100000,
      oldPrice: 2400000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "V",
    },
    {
      id: 10,
      image: "./assets/img/v215g.png",
      name: "Vivo V21 5G",
      price: 2950000,
      oldPrice: 300000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "V",
    },
    {
      id: 11,
      image: "./assets/img/s1.jpg",
      name: "Vivo S1",
      price: 2750000,
      oldPrice: 2900000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "S",
    },
    {
      id: 12,
      image: "./assets/img/s1pro.png",
      name: "Vivo S1 Pro",
      price: 3000000,
      oldPrice: 3200000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "S",
    },
    {
      id: 13,
      image: "./assets/img/v7+.png",
      name: "Vivo V7+",
      price: 4990000,
      oldPrice: 7990000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "V",
    },
    {
      id: 14,
      image: "./assets/img/v7.png",
      name: "Vivo V7",
      price: 4490000,
      oldPrice: 5200000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "V",
    },
    {
      id: 15,
      image: "./assets/img/y81.png",
      name: "Vivo Y81",
      price: 3690000,
      oldPrice: 3900000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 16,
      image: "./assets/img/y71.png",
      name: "Vivo Y71",
      price: 3290000,
      oldPrice: 3300000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 17,
      image: "./assets/img/v11i.png",
      name: "Vivo V11i",
      price: 5990000,
      oldPrice: 6490000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "V",
    },
    {
      id: 18,
      image: "./assets/img/y91.jpg",
      name: "Vivo Y91",
      price: 3990000,
      oldPrice: 4490000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "Y",
    },
    {
      id: 19,
      image: "./assets/img/v9.png",
      name: "Vivo V9",
      price: 5590000,
      oldPrice: 7490000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "8 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "V",
    },
    {
      id: 20,
      image: "./assets/img/v9youth.png",
      name: "Vivo V9 Youth",
      price: 4990000,
      oldPrice: 5200000,
      insideMemory: "128GB",
      screen: 'AMOLED6.44"Full HD+',
      os: "Android 11",
      frontCam: "Chính 64 MP & Phụ 8 MP, 2 MP",
      backCam: "44 MP",
      ram: "4 GB",
      sim: "2 Nano SIMHỗ trợ 4G",
      pin: "4000 mAh33 W",
      type: "V",
    },
  ],
};
export default data;
