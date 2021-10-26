import FadeInImage from "../src/components/FadeInImage";

function Hearth() {
  const size = 14;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 512 512"
    >
      <path
        fill="#FF6647"
        d="M474.655,74.503C449.169,45.72,413.943,29.87,375.467,29.87c-30.225,0-58.5,12.299-81.767,35.566
        c-15.522,15.523-28.33,35.26-37.699,57.931c-9.371-22.671-22.177-42.407-37.699-57.931c-23.267-23.267-51.542-35.566-81.767-35.566
        c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936c0,44.458,13.452,88.335,39.981,130.418
        c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146c2.203,0.988,4.779,0.988,6.981,0
        c2.57-1.151,63.637-28.798,125.683-80.146c36.618-30.304,65.836-62.565,86.845-95.889C498.548,263.271,512,219.394,512,174.936
        C512,137.911,498.388,101.305,474.655,74.503z"
      />
      <path
        fill="#E35336"
        d="M160.959,401.243c-36.618-30.304-65.836-62.565-86.845-95.889
        c-26.529-42.083-39.981-85.961-39.981-130.418c0-37.025,13.612-73.631,37.345-100.433c21.44-24.213,49.775-39.271,81.138-43.443
        c-5.286-0.786-10.653-1.189-16.082-1.189c-38.477,0-73.702,15.851-99.188,44.634C13.612,101.305,0,137.911,0,174.936
        c0,44.458,13.452,88.335,39.981,130.418c21.009,33.324,50.227,65.585,86.845,95.889c62.046,51.348,123.114,78.995,125.683,80.146
        c2.203,0.988,4.779,0.988,6.981,0c0.689-0.308,5.586-2.524,13.577-6.588C251.254,463.709,206.371,438.825,160.959,401.243z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="page-container">
      <div className="content">
        <FadeInImage
          src="/testimage.jpg"
          width={960}
          height={1440}
          layout="responsive"
          objectFit="contain"
          priority
        />
        <a
          className="credits move-top-hover"
          href="https://unsplash.com/photos/0p0lVOLdVmg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          target="_blank"
          rel="noreferrer"
        >
          🙌 Diana Parkhouse
        </a>
      </div>
      <footer>
        Made with <Hearth /> by{" "}
        <a href="https://ferrarodomenico.com" target="-_blank">
          Domenico Ferraro
        </a>
      </footer>
    </div>
  );
}
