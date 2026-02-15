import { Tag } from "../ui";

export default function Card() {
  const thumbnailSuffix = Math.random() > 0.5 ? "2" : "";

  return (
    <article className="min-w- w-full h-full flex flex-col items-start justify-start gap-spacing-3">
      <figure className="w-full">
        <img
          src={`/assets/sample_thumbnail${thumbnailSuffix}.png`}
          alt="프로젝트 썸네일"
          className="w-full h-auto object-contain"
        />
      </figure>
      <figcaption className="w-full h-fit wrap-break-word gap-spacing-3 font-pretendard">
        <h3 className="text-s font-bold">
          프로젝트 제목 프로젝트 제목 프로젝트 제목
        </h3>
        <ul className="flex flex-wrap gap-spacing-3">
          <Tag color="#FF5733" label="Graphic" />
          <Tag color="#33C1FF" label="Space" />
        </ul>
      </figcaption>
    </article>
  );
}
