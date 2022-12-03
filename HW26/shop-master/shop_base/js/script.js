const controller = async (url, method = `GET`, obj) => {
  let options = {
    method: method,
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
  };

  if (obj) options.body = JSON.stringify(obj);

  let request = await fetch(url, options),
    response = request.ok ? request.json() : Promise.catch(request.statusText);
  return response;
};

const API = `https://634e9f834af5fdff3a625f84.mockapi.io`;
const headerUser = document.querySelector(`#headerUser`);
const headerShoppingCart = document.querySelector(`#headerShoppingCart`);
const headerLogout = document.querySelector(`#headerLogout`);

const loginForm = document.querySelector(`#loginForm`);
const errorBlock = document.querySelector(`#errorBlock`);
const signInEmail = document.querySelector(`#signInEmail`);
const signInPassword = document.querySelector(`#signInPassword`);

const registrationUser = document.querySelector(`#registrationForm`);
const userName = document.querySelector(`#userName`);
const registrationEmail = document.querySelector(`#registrationEmail`);
const registrationPassword = document.querySelector(`#registrationPassword`);
const verifyPassword = document.querySelector(`#verifyPassword`);
const error = document.querySelector(`#error`);
const headerShoppingCartCount = document.querySelector(
  `#headerShoppingCartCount`
);
const categoriesContainer = document.querySelector(`#categoriesContainer`);

const userInfoName = document.querySelector(`#userInfoName`);
const userInfoEmail = document.querySelector(`#userInfoEmail`);

const accountCart = document.querySelector(`#accountCart`);
const deleteAcc = document.querySelector(`#deleteAcc`);
const shoppingCartTable = document.querySelector(`#shoppingCartTable`);
const orderSummary = document.querySelector(`#orderSummary`);
let suma = [];

let result = (money, tallage) => money - (money / 100) * tallage;
let findSum = async (suma) => {
  let add = function (arr) {
    return arr.reduce((a, b) => a + b, 0);
  };

  let sum = await add(suma);
  let orderSummaryTotal = document.querySelector(`#orderSummaryTotal`);
  orderSummaryTotal ? (orderSummaryTotal.innerHTML = `$${sum}`) : ``;
  suma = [];
};

let funcLocal = async () => {
  let storageUsers = await controller(API + `/users`);
  user = await storageUsers.find((user) => user.email === localStorage.email);

  if (user.status) {
    let headerShoppingCart = document.querySelector(`#headerShoppingCart`);
    headerUser.innerHTML = user.name;
    headerUser.href = `account.html`;
    headerLogout.classList.add(`active`);
    headerShoppingCart.href = "shoppingCart.html";
    headerShoppingCartCount.innerHTML = `${user.shoppingCart.length}`;

    userInfoName ? (userInfoName.innerHTML = user.name) : ``;
    userInfoEmail ? (userInfoEmail.innerHTML = user.email) : ``;
  }
};

headerLogout.addEventListener(`click`, async (e) => {
  await controller(API + `/users/${user.id}`, `PUT`, { status: false });
  headerLogout.className = `header__logout`;
  headerUser.innerHTML = `Log in`;
  headerShoppingCartCount.innerHTML = `0`;
  localStorage.removeItem(`email`);
  window.location = `login.html`;
});

loginForm
  ? loginForm.addEventListener(`submit`, async (e) => {
      e.preventDefault();
      try {
        let storageUsers = await controller(API + `/users`);
        let user = storageUsers.find(
          (user) => user.email === signInEmail.value
        );
        userLogIn = user;
        if (!user) {
          errorBlock.classList.add(`active`);
          errorBlock.innerHTML = `Invalid email`;

          return;
        } else if (user.password !== signInPassword.value) {
          errorBlock.classList.add(`active`);
          errorBlock.innerHTML = `Invalid password`;

          return;
        } else {
          await controller(API + `/users/${user.id}`, `PUT`, { status: true });
          localStorage.setItem(`email`, `${user.email}`);
          window.location = `index.html`;
        }
      } catch (err) {
        console.log(`In catch:`, err);
      }
    })
  : ``;

registrationUser
  ? registrationUser.addEventListener(`submit`, async (e) => {
      e.preventDefault();
      try {
        let newUser = {
          name: userName.value,
          email: registrationEmail.value,
          password: verifyPassword.value,
          status: true,
        };
        let storageUsers = await controller(API + `/users`);
        let user = storageUsers.find(
          (user) => user.email === registrationEmail.value
        );

        if (registrationPassword.value !== verifyPassword.value) {
          error.classList.add(`active`);
          error.innerHTML = `Password not matches!`;

          return;
        } else if (user) {
          error.classList.add(`active`);
          error.innerHTML = `User with email ${registrationEmail.value} already exist!`;

          return;
        } else {
          await controller(API + `/users`, `POST`, newUser);
          localStorage.setItem(`email`, `${newUser.email}`);
          window.location = `index.html`;
        }
      } catch (err) {
        console.log(`In catch:`, err);
      }
    })
  : ``;

const renderProducts = async (products) => {
  const friendsNames = Array.from(products, ({ category }) => category);
  const categories = Array.from(new Set(friendsNames));

  categories.map((category) => {
    let sectionProducts = document.createElement(`section`);
    sectionProducts.className = `category`;
    sectionProducts.innerHTML = `<h2>${category}</h2>`;
    sectionProducts.dataset.name = `${category}`;
    categoriesContainer.append(sectionProducts);
    let divCategory = document.createElement(`div`);
    divCategory.className = `category__container`;
    divCategory.id = `${category}`;
    sectionProducts.append(divCategory);
  });

  let divCategory = document.querySelectorAll(`.category__container`);

  divCategory.forEach((category) => {
    products.map((product) => {
      if (product.category === category.id) {
        let divProduct = document.createElement(`div`);
        divProduct.className = `product`;
        divProduct.id = `${product.id}`;
        divProduct.innerHTML = `<img
                            src="images/products/${product.img}.png"
                            class="product__img"
                            alt="${product.img}"
                            height="80"
                            />
                            <p class="product__title">${product.title}</p>
                            <div class="product__sale">
                                ${
                                  product.sale
                                    ? `<span class="product__sale--old">$${product.price}</span>
                                <span class="product__sale--percent">${product.salePercent}%</span>`
                                    : ``
                                }
                            </div>
                            <div class="product__info">
                                <span class="product__price">$${
                                  product.sale
                                    ? `${result(
                                        product.price,
                                        product.salePercent
                                      )}`
                                    : `${product.price}`
                                }</span>
                                <button class="product__cart" id="product${
                                  product.id
                                }">
                                <img
                                  src="images/shopping-cart.png"
                                  alt="shopping cart"
                                  height="20"
                                />
                              </button>
                            </div>`;

        category.append(divProduct);

        let btnCard = document.querySelector(`#product${product.id}`);

        localStorage.email
          ? btnCard.addEventListener(`click`, async (e) => {
              let storageUsers = await controller(API + `/users`);
              let user = storageUsers.find(
                (user) => user.email === localStorage.email
              );
              let cart = [
                ...user.shoppingCart,
                { id: `${product.id}`, count: "1" },
              ];
              let deleteCart = user.shoppingCart.findIndex(
                (cart) => cart.id === product.id
              );

              if (btnCard.className === `product__cart product__cart--in`) {
                let newCart = user.shoppingCart;
                user.shoppingCart.splice(deleteCart, 1);
                btnCard.classList.remove(`product__cart--in`);
                await controller(API + `/users/${user.id}`, `PUT`, {
                  shoppingCart: newCart,
                });

                headerShoppingCartCount.innerHTML = `${user.shoppingCart.length}`;
              } else {
                await controller(API + `/users/${user.id}`, `PUT`, {
                  shoppingCart: cart,
                });
                btnCard.classList.add(`product__cart--in`);
                let storageUsers = await controller(API + `/users/${user.id}`);
                headerShoppingCartCount.innerHTML = `${storageUsers.shoppingCart.length}`;
              }
            })
          : btnCard.addEventListener(
              `click`,
              async (e) => (window.location = `login.html`)
            );
      }
    });
  });
  let storageUsers = await controller(API + `/users`);
  user = await storageUsers.find((user) => user.email === localStorage.email);
  localStorage.email
    ? user.shoppingCart.map((item) => {
        let btnCard = document.querySelector(`#product${item.id}`);
        btnCard ? btnCard.classList.add(`product__cart--in`) : ``;
      })
    : ``;
};
const funcProducts = async () => {
  let storageProducts = await controller(API + `/products`);
  renderProducts(storageProducts);
};

const renderTR = async (product) => {
  let storageProducts = await controller(API + `/products`);
  let productInCart = storageProducts.find(
    (productCart) => productCart.id === product.id
  );

  const TrShopingCart = document.querySelector(`#TrShopingCart`);
  let trProduct = document.createElement(`tr`);
  trProduct.innerHTML = `
      <td>
        <div class="item__info">
          <img
            src="images/products/${productInCart.img}.png"
            alt="${productInCart.img}"
            height="100"
          />
          <div>
            <p class="item__info--title">${productInCart.title}</p>
          </div>
        </div>
      </td>
      <td>$${productInCart.price}</td>
      <td>${productInCart.sale ? `${productInCart.salePercent}%` : `-`}</td>
      <td><input id="input${product.id}" type="number" value="${
    product.count
  }" /></td>
      <td id="fullPrice${product.id}" class="fullPrice">$${
    productInCart.sale
      ? result(productInCart.price, productInCart.salePercent) * product.count
      : productInCart.price * product.count
  }</td>
      <td>
        <button class="item__remove" id="item__remove${product.id}">
          <img src="images/delete.png" alt="delete" height="20" />
        </button>
      </td>
    </tr>`;

  TrShopingCart.append(trProduct);

  let input = document.querySelector(`#input${product.id}`);
  input.addEventListener(`change`, async (e) => {
    let fullPrice = document.querySelector(`#fullPrice${product.id}`);
    fullPrice.innerHTML = `$${
      productInCart.sale
        ? result(productInCart.price, productInCart.salePercent) * input.value
        : productInCart.price * input.value
    }`;

    let productC = user.shoppingCart.map((productCart) => {
      if (productCart.id === product.id) {
        productCart.count = input.value;
      }
      return productCart;
    });
    await controller(API + `/users/${user.id}`, `PUT`, {
      shoppingCart: productC,
    });

    total = [];
    let full = document.querySelectorAll(`.fullPrice`);
    full.forEach((item) => total.push(+item.innerHTML.slice(1)));
    findSum(total);
  });

  let itemRemove = document.querySelector(`#item__remove${product.id}`);

  itemRemove.addEventListener(`click`, async (e) => {
    let deleteCart = user.shoppingCart.findIndex(
      (cart) => cart.id === product.id
    );

    let newCart = user.shoppingCart;
    user.shoppingCart.splice(deleteCart, 1);
    await controller(API + `/users/${user.id}`, `PUT`, {
      shoppingCart: newCart,
    });
    trProduct.remove();
    headerShoppingCartCount.innerHTML = `${user.shoppingCart.length}`;
    total = [];
    let full = document.querySelectorAll(`.fullPrice`);
    full.forEach((item) => total.push(+item.innerHTML.slice(1)));
    findSum(total);
  });

  let fullPrice = document.querySelector(`#fullPrice${product.id}`);
  suma.push(+fullPrice.innerHTML.slice(1));

  findSum(suma);
};
const completeOrder = () =>
  orderSummary.addEventListener(`click`, async (e) => {
    e.preventDefault();

    let allorders = user.orders.concat(user.shoppingCart);

    await controller(API + `/users/${user.id}`, `PUT`, { orders: allorders });
    await controller(API + `/users/${user.id}`, `PUT`, { shoppingCart: [] });
    window.location = `account.html`;
  });
const renderShoppingCart = async () => {
  let storageUsers = await controller(API + `/users`);
  let user = storageUsers.find((user) => user.email === localStorage.email);
  user ? user.shoppingCart.map((product) => renderTR(product)) : ``;
  completeOrder();
};

const deleteAccount = () =>
  deleteAcc.addEventListener(`click`, async (e) => {
    await controller(API + `/users/${user.id}`, `DELETE`);
    localStorage.removeItem(`email`);
    window.location = `index.html`;
  });

let rendeOrderCart = async () => {
  let storageProducts = await controller(API + `/products`);
  let storageUsers = await controller(API + `/users`);
  let user = storageUsers.find((user) => user.email === localStorage.email);

  user.orders.map((order) => {
    let productInCart = storageProducts.find(
      (productCart) => productCart.id === order.id
    );
    accountCart
      ? (accountCart.innerHTML += `<tr>
                <td>
                  <div class="item__info">
                    <img src="images/products/${productInCart.img}.png" alt="${
          productInCart.img
        }" height="100" />
                    <div>
                      <p class="item__info--title">${productInCart.img}</p>
                    </div>
                  </div>
                </td>
                <td>$${productInCart.price}</td>
                 ${
                   productInCart.sale
                     ? `<td><span class="item__sale">-${productInCart.salePercent}%</span></td>`
                     : `<td>-</td>`
                 }
                <td>${order.count}</td>
                <td>$${
                  productInCart.sale
                    ? result(productInCart.price, productInCart.salePercent) *
                      order.count
                    : productInCart.price * order.count
                }</td>
              </tr>`)
      : ``;
  });
  deleteAccount();
};

localStorage.email ? funcLocal() : ``;
categoriesContainer ? funcProducts() : ``;
shoppingCartTable ? renderShoppingCart() : ``;
accountCart ? rendeOrderCart() : ``;