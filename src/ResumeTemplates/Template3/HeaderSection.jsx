export default function HeaderSection({ data }) {
    const { name, email, phone, address, header = {} } = data;
  
    return (
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{name || "Your Name Here"}</h1>
  
        <p className="text-sm text-gray-600 mt-1">
          {address || "Your Address Here"}
        </p>
  
        <div className="mt-2 text-[13px] space-y-1">
          <p><strong>Phone:</strong> {phone || "+91 00000 00000"}</p>
          <p><strong>Email:</strong> {email || "example@gmail.com"}</p>
        </div>
  
        <div className="flex gap-3 flex-wrap text-blue-600 underline text-[13px] mt-2">
          {header.linkedin && <a href={header.linkedin}>LinkedIn</a>}
          {header.website && <a href={header.website}>Portfolio</a>}
          {header.github && <a href={header.github}>GitHub</a>}
        </div>
  
        <hr className="mt-4 border-gray-300" />
      </header>
    );
  }
  