export default function ExtraSection({ extra }) {
    const placeholder = [
      "Languages: English, Hindi",
      "Hobbies: Reading, Editing, Coding",
    ];
  
    const list = extra?.length ? extra : placeholder;
  
    return (
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Additional Information</h2>
        <ul className="list-disc ml-5 text-sm text-gray-700">
          {list.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </section>
    );
  }
  