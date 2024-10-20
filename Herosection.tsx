// export default function Hero() {
//     return (
//       <section className="bg-blue-500 text-white h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
//           <p className="text-xl mb-6">I`m a passionate developer creating impactful web applications.</p>
//           <a href="/projects" className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg">
//             View My Projects
//           </a>
//         </div>
//       </section>
//     );
//   }
  
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-red-500 to-yellow-500 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg mb-6">I`m a passionate developer crafting engaging and impactful web applications.</p>
        <a 
          href="/projects" 
          className="bg-white text-purple-600 px-8 py-4 rounded-lg shadow-lg transition duration-200 hover:bg-gray-200 hover:shadow-xl"
        >
          Explore My Projects
        </a>
      </div>
    </section>
  );
}
