export const makeProfile = (image, name, money, color, hex_color, mobile) => {
  return `
        <article style="background-color:${hex_color}">
          <div class="left">
            <img src="${image}" alt="" />
          </div>
          <div class="right">
            <span style="color:${color}" class="name">${name}</span>
            <span class="money">${exchangeRate(money)}원</span>
            <span class="mobile">${changeIcon(mobile)}</span>
          </div>
        </article>
      `;
};

const exchangeRate = (money) => parseInt(money.slice(1, money.length)) * 1385;
const changeIcon = (mobile) => {
  if (mobile.includes("Android")) {
    return "<i class='fa-brands fa-android'></i>";
  } else if (mobile.includes("Windows")) {
    return "<i class='fa-brands fa-windows'></i>";
  } else if (mobile.includes("Feature")) {
    return "<i class='fa-solid fa-phone'></i>";
  } else {
    return "<i class='fa-solid fa-question'></i>";
  }
};
