const Product = require('./model/product');

class FakeDb {

  constructor() {
    this.products = [
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        hedding1: "サンプルテキスト1",
        hedding2: "サンプルテキスト2",
        hedding3: "サンプルテキスト3",
        heddingtext1:
          "サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　",
        heddingtext2:
          "サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　",
        heddingtext3: "ダダダダ　ダダダダ　ダダダダ　ダダダダ　ダダダダ　",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        hedding1: "サンプルテキスト1",
        hedding2: "サンプルテキスト2",
        hedding3: "サンプルテキスト3",
        heddingtext1:
          "サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　",
        heddingtext2:
          "サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　",
        heddingtext3: "ダダダダ　ダダダダ　ダダダダ　ダダダダ　ダダダダ　",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Standard",
        price: 299,
        description: "",
        hedding1: "サンプルテキスト1",
        hedding2: "サンプルテキスト2",
        hedding3: "サンプルテキスト3",
        heddingtext1:
          "サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　",
        heddingtext2:
          "サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　",
        heddingtext3: "ダダダダ　ダダダダ　ダダダダ　ダダダダ　ダダダダ　",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Special",
        price: 999,
        description: "",
        hedding1: "サンプルテキスト1",
        hedding2: "サンプルテキスト2",
        hedding3: "サンプルテキスト3",
        heddingtext1:
          "サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　",
        heddingtext2:
          "サンプル文章　サンプル文章　サンプル文章　サンプル文章　サンプル文章　",
        heddingtext3: "ダダダダ　ダダダダ　ダダダダ　ダダダダ　ダダダダ　",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDB();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDB() {
    this.products.forEach(
      (product) => {
        const newProduct = new Product(product);
        newProduct.save();
      }
    )
  }

  seeDb() {
    this.pushProductsToDB();
  }
}

module.exports = FakeDb;
