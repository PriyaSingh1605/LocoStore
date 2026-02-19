export default function MgmtDetails({ user }) {
  const data=user.data;
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <p className="text-4xl font-bold">{data?.username || "Loading..."}</p>

      <p>Email: {data?.email || ""}</p>
    </>
  );
}
