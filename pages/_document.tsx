import Document, { DocumentContext } from 'next/document';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Provider store={store}>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </Provider>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
