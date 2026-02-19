export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-900 text-white px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-bold text-lg mb-2">Company</h2>
            <p>About us</p>
            <p>Careers</p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Support</h2>
            <p>Help Center</p>
            <p>Contact</p>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2">Legal</h2>
            <p>Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          © 2026 Priya Singh
        </p>
      </footer>
    </>
  );
}
