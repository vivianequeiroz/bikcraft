if(window.SimpleSlide) { 
    new SimpleSlide({
        slide: "quote",
        time: 5000
    });

    new SimpleSlide({
        slide: "portfolio",
        time: 5000,
        nav: true
    });
}

if(window.SimpleAnime) {
    new SimpleAnime();
}

if(window.SimpleForm) { 
    new SimpleForm({
        form: ".formphp", 
        button: "#enviar",
        erro: "<div id='form-erro'><Erro no envio!><p>Um erro ocorreu, tente para o e-mail contato@vivianedev.com.</p></div>",
        sucesso: "<div id='form-sucesso'><h2>Sucesso no envio!></h2><p>Em breve eu entro em contato com você!.</p></div>"
    });
}
