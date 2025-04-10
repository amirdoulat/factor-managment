type _status = "done" | "submit";
const statuses: _status[] = ["done", "submit"];
interface _item {
  title: string;
  date: string;
  price: number;
  status: _status;
}
const items: _item[] = [];
for (let i = 0; i < 10; i++)
  items.push({
    title: `item sample ${i}`,
    date: new Date().toDateString(),
    price: Math.floor(Math.random() * 1_000_000),
    status: statuses[Math.round(Math.random() * 2) % 2],
  });
export default function Home() {
  return (
    <main className="">
      <nav className="bg-blue-400 px-8 py-4">
        <h1 className="text-4xl font-bold ">Invoice dashboard</h1>
      </nav>
      <section>
        <table className="border rounded-md table-auto ">
          <thead>
            <tr className="bg-gray-300 capitalize ">
              <th className="p-1 text-start">title</th>
              <th className="p-1 text-start">date</th>
              <th className="p-1 text-start">price</th>
              <th className="p-1 text-start">status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, key) => (
              <tr
                key={`${item.title}_${key}`}
                className={`${key % 2 === 0 ? "bg-gray-100" : ""}`}
              >
                <td className="p-1 text-start">{item.title}</td>
                <td className="p-1 text-start">{item.date}</td>
                <td className="p-1 text-start">{item.price}</td>
                <td className="p-1 text-start">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
