export default function ProfilePic({ h, w }) {
  return (
    <>
      <div className="flex justify-center p-4">
        <div
          className="bg-gray-500 rounded-full border-8 border-blue-500 "
          style={{ height: h, width: w }}
        ></div>
      </div>
    </>
  );
}
