export default function HeaderSection({ data }) {
    const { firstName, lastName, email, phone, address } = data;
  
    return (
      <header className="border-b pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-wide">
          {firstName} {lastName}
        </h1>
  
        <div className="text-sm mt-2 space-y-1">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </header>
    );
  }
  