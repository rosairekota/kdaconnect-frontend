import React, { useState, useRef, useEffect, Fragment } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import themes from '../../../styles/theme/themes';
import { Layout, LayoutContent, LayoutContainer, LayoutColumns, LayoutColumn } from '@paljs/ui/Layout';
import icons from '@paljs/icons';
import { SidebarBody, SidebarRefObject, Sidebar } from '@paljs/ui/Sidebar';
import Header from './Header';
import SimpleLayout from '../../../styles/GlobalStyle';
import { useRouter } from 'next/router';
import { Menu, MenuRefObject } from '@paljs/ui/Menu';
import Link from 'next/link';
import { adminRoutes } from '../../../../routes';
import SEO, { SEOProps } from 'components/SEO';

const LayoutPage: React.FC<SEOProps> = ({ children, ...rest }) => {
  const [theme, setTheme] = useState<DefaultTheme['name']>('default');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');
  const sidebarRef = useRef<SidebarRefObject>(null);
  const router = useRouter();
  const menuRef = useRef<MenuRefObject>(null);
  const [seeHeader, setSeeHeader] = useState(true);

  const getState = (state?: 'hidden' | 'visible' | 'compacted' | 'expanded') => {
    setSeeHeader(state !== 'compacted');
  };

  const authLayout = router.pathname.startsWith('/auth');

  return (
    <>
      <SEO {...rest} />
      <ThemeProvider theme={themes(theme, dir)}>
        <Fragment>
          <SimpleLayout />
          <Layout evaIcons={icons} dir={dir} className={!authLayout ? 'auth-layout' : ''}>
            {!authLayout && <Header toggleSidebar={() => sidebarRef.current?.toggle()} />}
            <LayoutContainer>
              {!authLayout && (
                <Sidebar
                  getState={getState}
                  ref={sidebarRef}
                  property="start"
                  containerFixed
                  responsive
                  className="menu-sidebar"
                >
                  <SidebarBody>
                    <Menu
                      nextJs
                      className="sidebar-menu"
                      Link={Link}
                      ref={menuRef}
                      items={adminRoutes}
                      currentPath={router.pathname}
                      toggleSidebar={() => sidebarRef.current?.hide()}
                    />
                  </SidebarBody>
                </Sidebar>
              )}
              <LayoutContent>
                <LayoutColumns>
                  <LayoutColumn className="main-content">{children}</LayoutColumn>
                </LayoutColumns>
              </LayoutContent>
            </LayoutContainer>
          </Layout>
        </Fragment>
      </ThemeProvider>
    </>
  );
};

export default LayoutPage;
