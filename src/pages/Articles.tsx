import Navbar from "../components/Navbar";
import { useState, useRef } from "react";

const Articles = () => {
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pdfViewerRef = useRef<HTMLDivElement>(null);

  // Örnek haber verisi (bunu bir API'den veya dinamik veri kaynağından alabilirsiniz)
  const articles = [
    { id: 1, title: "Ankara Barosu Dergisi’nde Yayımlanmakta Olan Makaleler", pdf: "/public/pdfs/ankbaro.pdf", date: "20 Eylül", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 2, title: "Haber 2", pdf: "/pdfs/document2.pdf", date: "15 Ekim", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 3, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 4, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 5, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 6, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 7, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 8, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 9, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
    { id: 10, title: "Haber 3", pdf: "/pdfs/document3.pdf", date: "10 Kasım", image: "/public/pdfs/jpg/ankbaro.jpg" },
  ];

  const handleArticleClick = (pdf: string) => {
    setIsLoading(true);
    setSelectedPDF(pdf);
    setTimeout(() => {
      pdfViewerRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen pt-0">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-primary mb-6">
          Yargıtay Kararları ve Makaleler
        </h1>

        {/* Haber Listesi */}
        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article) => (
            <article key={article.id} className="post clearfix mb-30 bg-lighter shadow-md rounded-lg overflow-hidden">
              <div className="entry-header">
                <div className="post-thumb thumb">
                  <img src={article.image} alt={article.title} className="img-responsive img-fullwidth" />
                </div>
              </div>
              <div className="entry-content p-4">
                <div className="entry-meta media mt-0 no-bg no-border">
                  <div className="entry-date media-left text-center flip bg-theme-colored pt-2 pr-3 pb-2 pl-3">
                    <ul>
                      <li className="font-16 text-white font-weight-600">{article.date.split(' ')[0]}</li>
                      <li className="font-12 text-white text-uppercase">{article.date.split(' ')[1]}</li>
                    </ul>
                  </div>
                  <div className="media-body pl-3">
                    <div className="event-content pull-left flip">
                      <h4 className="entry-title text-primary text-uppercase m-0 mt-1">
                        <a href="#" onClick={() => handleArticleClick(article.pdf)}>{article.title}</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-sm">PDF dosyasını görüntülemek için tıklayın</p>
                <a href="#" onClick={() => handleArticleClick(article.pdf)} className="btn-read-more inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">Haberin Devamı</a>
                <div className="clearfix"></div>
              </div>
            </article>
          ))}
        </div>

        {/* PDF Görüntüleyici */}
        {selectedPDF && (
          <div ref={pdfViewerRef} className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Seçilen Makale</h2>
            <div className="border rounded-lg overflow-hidden" style={{ height: "600px" }}>
              {isLoading && (
                <div className="flex justify-center items-center h-full">
                  <p>Yükleniyor...</p>
                </div>
              )}
              <iframe
                src={selectedPDF}
                className="w-full h-full"
                frameBorder="0"
                onLoad={handleIframeLoad}
                style={{ display: isLoading ? "none" : "block" }}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;