window.introduce = (name, job_title) => alert(`이름:${name} 직업:${job_title}`);

export const makeProfile = (image, name, job_title) => {
  return `
        <article onclick="introduce('${name}','${job_title}')">
          <div class="left">
            <img src="${image}" alt="" />
          </div>
          <div class="right">
            <span class="name">${name}</span>
            <span class="job">${job_title}</span>
          </div>
        </article>
      `;
};
