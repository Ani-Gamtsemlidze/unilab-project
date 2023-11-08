# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

გამოყენებული ბიბლიოთეკა:

- პროექტში ვიყენებ react-router-ს (npm install react-router-dom@6), single-page application- ში ნავიგაციისთვის, გვერდიდან გვერდზე refresh- ის გარეშე გადასვლისთვის.

- პროექტში api- დან data fetching- ისთვის ვიყენებ axios- promise-based HTTP library- ის.

- პროექტში ვიყენებ ბიბლიოთეკას პაგინაციისთვის: (https://www.npmjs.com/package/react-responsive-pagination?activeTab=readme). პაგინაცია გამოყენებული მაქ ორ გვერდზე: form-სა და user card- ზე. პაგინაცია მუშაობს ჩემს მიერ გადაცემული მონაცემებით, რომელიც მოიცავს გვერდების რაოდენობას და თუ რომელ გვერდზე რომელი დათა უნდა გამოიტანოს.
