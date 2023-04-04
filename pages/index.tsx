import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderResponsive } from '../components/Header/HeaderResponsive';
import { HeroBullets } from '../components/Hero/HeroBullets';

export default function HomePage() {
  const links = [
    {
      link: '/about',
      label: 'Features',
    },
  ];
  return (
    <>
      <HeaderResponsive links={links} />
      <HeroBullets />
    </>
  );
}
