export default function HeroSection() {
  const scroller = [
    {
      id: 1,
      src: "image.png",
    },
  ];

  return (
    <div className="w-full p-4 bg-amber-100">
      {scroller.map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-4">
          <img
            src={item.url}
            alt=""
            className="w-1/2 h-60 object-contain rounded-xl"
          />

          <div className="w-1/2 flex flex-col items-center text-center">
            <p className="text-lg font-semibold">Today's Deal</p>
            <p className="text-xl font-bold">Get the Offer of {item.offer}</p>
          </div>
        </div>
      ))}


    </div>
  );
}
