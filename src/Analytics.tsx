import { Helmet } from "react-helmet";

const Analytics = () => (
  <div>
    
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
        </div>
);

export default Analytics;
