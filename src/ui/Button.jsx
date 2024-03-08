import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type }) {
  const base =
    'inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary:
      base +
      ' bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-3 md:px-6 md:py-4',
    small:
      base +
      ' bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 px-4 py-2 md:px-5 md:py-2.5 text-xs',
    secondary:
      base +
      ' border-2 border-stone-300 text-stone-400 hover:bg-stone-300 focus:bg-stone-300 focus:ring-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800 focus:text-stone-800',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
