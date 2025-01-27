import { Mail, MailCheck, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-blue-500 h-[280px] w-[100vw]  ">
      <div className="flex justify-between ]">
        <div className="flex">
          <img src="./film.png" alt="" />
          <h1>Movie Z</h1>
        </div>

        <p>Contact Information</p>
        <p>Follow us</p>
      </div>
      <div className="flex justify-between">
        <h2>© 2024 Movie Z. All Rights Reserved.</h2>
        <div className="h-[40px] w-[146px] flex">
          <Mail />
          <p>Email</p>
          <p>support@movieZ.com</p>
        </div>

        <p>Facebook Instagram Twitter YouTube</p>
      </div>
      <div className="flex justify-center h-[40px] w-[416px] items-center">
        <Phone />
        <p>Phone</p>
        <p>+976 (11) 123-4567</p>
      </div>
    </div>
  );
}
