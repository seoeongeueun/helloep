export default function Card() {
  const thumbnailSuffix = Math.random() > 0.5 ? "2" : "";

  return (
    <article className="min-w- w-full h-full flex flex-col items-start justify-end gap-spacing-3">
      <img
        src={`/assets/sample_thumbnail${thumbnailSuffix}.png`}
        alt="프로젝트 썸네일"
        className="w-full h-auto object-contain"
      ></img>
      <div className="w-full h-fit wrap-break-word gap-spacing-3 font-pretendard">
        <h3 className="text-s font-bold">
          프로젝트 제목 프로젝트 제목 프로젝트 제목
        </h3>
        <div className="flex flex-wrap gap-spacing-3">
          <span className="text-xs text-gray">#태그</span>
          <span className="text-xs text-gray">#태그</span>
        </div>
      </div>
    </article>
  );
}
