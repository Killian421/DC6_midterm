'use client';

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

const Page = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setTodos(data.todos);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <Layout>
      <div className="background-image min-h-screen py-12">
        <div className="bg-black/0 backdrop-blur-none py-12">
        <center>
          <h1 className="text-center text-4xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 inline-block shadow-lg mb-6">
            Todo List
          </h1>
          </center>
          {loading ? (
            <div className="flex justify-center items-center min-h-[40vh]">
              <p className="text-lg font-semibold text-white">Loading todos...</p>
            </div>
          ) : (
            <div className="overflow-x-auto px-8">
              <table className="w-full max-w-6xl mx-auto bg-white/20 backdrop-blur-md shadow-lg rounded-lg overflow-hidden border border-white/20">
                <thead className="bg-blue-600/20 backdrop-blur-md">
                  <tr>
                    <th className="py-4 px-8 text-left text-white font-semibold text-lg">Todo</th>
                    <th className="py-4 px-8 text-center text-white font-semibold text-lg">Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((p, index) => (
                    <tr
                      key={p.id}
                      className={`border-b border-white/20 transition ${
                        index % 2 === 0 ? "bg-white/10" : "bg-white/20"
                      } hover:bg-white/30`}
                    >
                      <td className="py-4 px-8 text-white/90 text-lg">{p.todo}</td>
                      <td className={`py-4 px-8 text-center font-semibold text-lg ${p.completed ? "text-green-300" : "text-red-300"}`}>
                        {p.completed ? "✔ Yes" : "✘ No"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Page;