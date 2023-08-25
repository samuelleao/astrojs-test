import type { HeadTypes } from "./types";

export function Head({ title, description, image, url, creator, children }: HeadTypes) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="description" key="desc" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="Vibecriativa" />
            <meta property="og:image" content={image ? image : "/logo-default-share.png"} />
            <meta property="og:url" content={`vibecriativa.com.br/${url}`} />
            <meta property='og:type' content='website' />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="pt_BR" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content={`vibecriativa.com.br/${url}`} />
            <meta name="twitter:site" content="Vibecriativa" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image ? image : "/logo-default-share.png"} />
            <meta name="twitter:creator" content={creator ? creator : "Vibecriativa"} />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            {children && children}
        </>
    );
}