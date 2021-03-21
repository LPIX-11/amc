import footerStyles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={footerStyles.footer}>
      © Copyright AMC 2021
      <a
        href="https://www.linkedin.com/in/mohamed-johnson"
        target="_blank"
        rel="noopener noreferrer"
        className={'pl-2'}
      >
        Powered by{' '}
        @LPIX-11
      </a>
    </footer>
  )
}