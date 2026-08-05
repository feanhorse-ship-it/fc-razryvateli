export default function GalleryPreview() {
  return (
    <section className="py-20">
      <div className="container">

        <h2 className="section-title">
          Фотогалерея
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {[1,2,3].map((item)=>(
            <div
              key={item}
              className="card h-64 flex items-center justify-center text-slate-400"
            >
              Фото {item}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}