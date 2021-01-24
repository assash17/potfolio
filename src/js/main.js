import "../css/main.scss";
// my photo img
import myPhoto from "../resource/photo.jpg";

// interest skill img
import aws from "../resource/aws.png";
import docker from "../resource/docker.png";
import github from "../resource/github.png";
import jenkins from "../resource/jenkins.png";
import kubernetes from "../resource/kubernetes.png";
import linux from "../resource/linux.png";
import nodejs from "../resource/nodejs.png";
import react from "../resource/react.png";
import typescript from "../resource/typescript.png";
import vue from "../resource/vue.png";
import webpack from "../resource/webpack.png";

const photo = document.querySelector(".photo");
photo.src = myPhoto;

const interest = document.querySelector(".interest>div");
const imgArr = [
  aws,
  docker,
  github,
  jenkins,
  kubernetes,
  linux,
  nodejs,
  react,
  typescript,
  vue,
  webpack,
];
imgArr.forEach((img) => {
  const temp = document.createElement("img");
  temp.src = img;
  interest.appendChild(temp);
});
