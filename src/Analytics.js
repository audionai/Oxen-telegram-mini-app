import React from "react";
import { Helmet } from "react-helmet";

const Analytics = () => (
  <Helmet>
    {/* Google Analytics Global Site Tag */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-BZC8RPRQRE"></script>
    <script>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BZC8RPRQRE');
      `}
    </script>
  </Helmet>
);

export default Analytics;
