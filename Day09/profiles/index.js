import { data } from "./data.js";
import { makeProfile } from "./render.js";

const container = document.querySelector(".container");
container.insertAdjacentHTML("beforeend", data.map((v) => makeProfile(v.image, v.name, v.job_title)).join(""));
