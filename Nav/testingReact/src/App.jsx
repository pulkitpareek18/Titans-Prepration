// Import React and useState hook
import { useState } from "react";

// Sample book data
const books = [
  {
    id: 1,
    title: "The C Programming Language",
    author: "Brian W. Kernighan and Dennis M. Ritchie",
    description: "The Second Edition of The C Programming Language The book enumerates the concepts related to C Programming language, as prescribed by ANSI standard. The book elaborates on the basics of procedure oriented programming and the fundamentals of writing C codes. It goes on to cover aspects like functions and loops, learning which will help novice programmers to code elementary level codes properly. concepts Covered Each concept is covered using tracing to explain how the particular coding element works, real- time programs to help users understand how to implement learned concepts and computerized outputs to assure validity of programs written.",
    cover: "https://m.media-amazon.com/images/I/41vUdzcR8cL.jpg"
  },
  {
    id: 2,
    title: "Beginning Ubuntu Linux",
    author: "Keir Thomas",
    description: "Beginning Ubuntu Linux, Fourth Edition is the update to the best-selling book on Ubuntu, today's hottest Linux distribution. Targeting newcomers to Linux and to the Ubuntu distribution alike, readers are presented with an introduction to the world of Linux and open source community, followed by a detailed overview of Ubuntu's installation and configuration process. ",
    cover: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4302-0191-5?as=webp"
  },
  {
    id: 3,
    title: "Java: The Complete Reference",
    author: "Herbert Schildt",
    description: "Fully updated for the current version of Java, Java SE 21, this comprehensive guide shows, step by step, how to design, write, debug, run, and administer high-performance Java programs. Inside, bestselling author Herbert Schildt and programming expert Dr. Danny Coward cover the entire Java language, including its syntax, keywords, and libraries. The book lays out cutting-edge development techniques and best practices. ",
    cover: "https://m.media-amazon.com/images/I/618YQosPQTL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 4,
    title: "Web Scraping with Python",
    author: "Ryan Mitchell",
    description: "If programming is magic then web scraping is surely a form of wizardry. By writing a simple automated program, you can query web servers, request data and parse it to extract the information you need. The expanded edition of this practical book not only introduces you web scraping, but also serves as a comprehensive guide to scraping almost every type of data from the modern web.",
    cover: "https://m.media-amazon.com/images/I/91JDlvRuicL._SL1500_.jpg"
  },
  {
    id: 5,
    title: "Hacking The Art of Exploitation",
    author: "Jon Erickson",
    description: "Rather than merely showing how to run existing exploits, author Jon Erickson explains how arcane hacking techniques actually work. To share the art and science of hacking in a way that is accessible to everyone, Hacking: The Art of Exploitation, 2nd Edition introduces the fundamentals of C programming from a hacker's perspective.",
    cover: "https://m.media-amazon.com/images/I/91UlU666haL._SL1500_.jpg"
  },
  {
    id: 6,
    title: "Algorithms",
    author: "Robert Sedgewick",
    description: "This fourth edition of Robert Sedgewick and Kevin Wayne’s Algorithms is the leading textbook on algorithms today and is widely used in colleges and universities worldwide. This book surveys the most important computer algorithms currently in use and provides a full treatment of data structures and algorithms for sorting, searching, graph processing, and string processing",
    cover: "https://m.media-amazon.com/images/I/61-8ZU7X3UL._AC_UF1000,1000_QL80_.jpg"
  },
  // Add more books as needed
];

// EBookCard component
const EBookCard = ({ book }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="border rounded-lg p-2 m-5 shadow-md mb-4">
      <div className="flex mb-4">
        <img src={book.cover} className="w-32 h-48 object-cover mr-12" alt={book.title} />
        <div>
          <h2 className="text-lg font-bold mb-2">{book.title}</h2>
          <p className="text-sm text-gray-600 mb-2">By {book.author}</p>
        </div>
      </div>
      <p className="text-sm m-2 mb-4">{book.description}</p>
      <div className="flex justify-between items-center">
        <button
          className={`flex items-center px-3 py-1 rounded-lg ${
            liked ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-600"
          }`}
          onClick={() => setLiked(!liked)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.47 3.53A6 6 0 0010 7.071a6 6 0 00-6.47-3.54A5.999 5.999 0 002 9c0 4.243 5.488 9.373 7.786 11.119a1 1 0 001.428 0C12.512 18.373 18 13.243 18 9a5.999 5.999 0 00-1.53-5.47zM11 18l-.214-.164C7.184 14.966 4 11.632 4 9c0-2.757 2.243-5 5-5s5 2.243 5 5c0 2.632-3.184 5.966-6.786 8.836L11 18z"
              clipRule="evenodd"
            />
          </svg>
          {liked ? "Liked" : "Like"}
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Open to Read
        </button>
      </div>
    </div>
  );
};

// EBooksPage component
const EBooksPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold ml-16 mb-4">E-Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <EBookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default EBooksPage;
