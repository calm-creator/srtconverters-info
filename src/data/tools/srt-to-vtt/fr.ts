import type { SrtToVttDetailContent } from './types';

export const frContent: SrtToVttDetailContent = {
  "metaTitle": "Convertisseur SRT en VTT Gratuit en Ligne – WebVTT Rapide et Local",
  "metaDescription": "Convertissez vos sous-titres SRT au format WebVTT (.vtt) en ligne et gratuitement. Ajout automatique de l'en-tête WEBVTT et conversion des virgules avec 100% de confidentialité.",
  "h1": "Convertisseur SRT en VTT",
  "heroDescription": "Convertissez instantanément vos fichiers de sous-titres SubRip (.srt) au format standardisé WebVTT (.vtt) conforme au W3C pour les lecteurs vidéo HTML5, les flux de streaming et le web moderne. 100% gratuit, rapide et privé dans votre navigateur.",
  "toolName": "Convertisseur SRT en VTT",
  "ui": {
    "pasteTitle": "Entrée des Sous-Titres SRT (.srt)",
    "pastePlaceholder": "Collez votre contenu SRT ici (ex :\n1\n00:00:01,000 --> 00:00:04,000\nBienvenue dans notre tutoriel vidéo !)...",
    "orDivider": "OU",
    "uploadTitle": "Option 2 — Téléverser un Fichier SRT",
    "convertButton": "Convertir en VTT",
    "clearButton": "Effacer",
    "trySampleButton": "Charger un Exemple",
    "livePreviewTitle": "Résultat WebVTT Converti (.vtt)",
    "errorNoInput": "Veuillez coller du texte SRT ou téléverser un fichier .srt pour lancer la conversion.",
    "pastedContentSource": "Contenu SRT Collé",
    "dropzoneTitle": "Glissez-déposez votre fichier .srt ici",
    "dropzoneSubtitle": "ou cliquez pour parcourir vos dossiers",
    "browseButton": "Choisir un Fichier SRT",
    "dropActiveText": "Déposez le fichier SRT ici...",
    "fileSelected": "Fichier sélectionné",
    "fileNameLabel": "Nom du Fichier",
    "fileSizeLabel": "Taille du Fichier",
    "cueCountLabel": "Sous-titres Convertis",
    "characterCountLabel": "Caractères",
    "downloadAction": "Télécharger .vtt",
    "copyAction": "Copier dans le Presse-papiers",
    "copiedSuccess": "Copié avec succès !",
    "resetAction": "Convertir un Autre Fichier",
    "previewTitle": "Aperçu du Fichier WebVTT",
    "previewEmpty": "Vos sous-titres WebVTT (.vtt) convertis s'afficheront ici immédiatement après avoir saisi ou chargé un fichier SRT.",
    "optionsTitle": "Options de Conversion",
    "optIncludeCueNumbers": "Conserver les numéros d'index des sous-titres",
    "optCleanTags": "Nettoyer les balises obsolètes non prises en charge (ex : <font>)",
    "errorInvalidFile": "Veuillez sélectionner un fichier de sous-titres .srt valide.",
    "errorEmptyFile": "Le fichier ou texte renseigné est totalement vide.",
    "errorParseFailed": "Aucun bloc de sous-titres SRT valide n'a été détecté. Vérifiez que les horodatages respectent le format 00:00:00,000 --> 00:00:00,000."
  },
  "sections": {
    "whatIsSrt": {
      "title": "Qu'est-ce qu'un fichier SRT ?",
      "content": [
        "Un fichier SRT (SubRip Subtitle) est le format de sous-titres en texte brut le plus universel et historiquement répandu dans le domaine de la vidéo numérique. Créé à l'origine par l'utilitaire Windows SubRip pour extraire les sous-titres et minutages des DVD physiques, le format .srt s'est imposé comme le standard mondial pour les lecteurs multimédias sur ordinateur, les téléviseurs et les logiciels de montage vidéo.",
        "Sur le plan structurel, un fichier SRT est composé de blocs séquentiels séparés par des sauts de ligne. Chaque bloc comprend quatre éléments indispensables : un numéro d'index séquentiel (1, 2, 3...), une plage d'horodatage précise indiquant l'apparition et la disparition du sous-titre (strictement formatée en heures:minutes:secondes,millisecondes : 00:00:01,250 --> 00:00:04,500), une ou plusieurs lignes de texte de dialogue et un saut de ligne final.",
        "Bien que les fichiers SRT soient extrêmement simples et reconnus par la quasi-totalité des logiciels autonomes comme VLC Media Player, MPV, HandBrake et Premiere Pro, ils ont été conçus avant l'ère du web moderne. Par conséquent, les navigateurs web HTML5 ne peuvent pas lire nativement les fichiers SRT et ne disposent d'aucun mécanisme officiel pour adapter leur typographie ou leur disposition avec CSS."
      ]
    },
    "whatIsVtt": {
      "title": "Qu'est-ce qu'un fichier WebVTT (.vtt) ?",
      "content": [
        "WebVTT (Web Video Text Tracks) est la norme ouverte officielle pour les sous-titres, transcriptions et chapitrages de vidéos sur internet, développée par le World Wide Web Consortium (W3C) et le WHATWG. Intégré directement aux spécifications HTML5, le format WebVTT est lu de manière native par l'ensemble des navigateurs web modernes —dont Google Chrome, Mozilla Firefox, Apple Safari et Microsoft Edge— sans recourir à des bibliothèques JavaScript tierces ni à des lecteurs flash.",
        "Un fichier WebVTT se caractérise par son en-tête d'ouverture obligatoire : la toute première ligne du document doit obligatoirement débuter par la mention littérale \"WEBVTT\". À la suite de cette signature, le fichier peut inclure des métadonnées (comme l'auteur, la langue ou le titre) ainsi que des règles de style avant le début des blocs de sous-titres.",
        "Au-delà de l'affichage de texte, le format WebVTT est pensé pour les interfaces web modernes et réactives. Il prend en charge des paramètres de positionnement vertical, d'alignement horizontal et de dimensionnement. De plus, il s'intègre parfaitement avec CSS via le pseudo-élément ::cue, offrant aux développeurs et créateurs de contenu un contrôle total sur les polices, les couleurs, les ombres de texte et l'opacité d'arrière-plan."
      ]
    },
    "whatIsConverter": {
      "title": "Qu'est-ce qu'un Convertisseur SRT en VTT ?",
      "content": [
        "Un convertisseur SRT en VTT est un outil spécialisé conçu pour adapter les fichiers de sous-titres traditionnels aux exigences des lecteurs web modernes. Il analyse la syntaxe SubRip (.srt), effectue les transformations mathématiques et typographiques requises, et génère des fichiers WebVTT (.vtt) conformes aux recommandations du W3C pour une intégration directe dans la balise <video> en HTML5.",
        "La transformation majeure effectuée par le convertisseur concerne la ponctuation des millisecondes dans les codes temporels. Dans le format SRT, les millisecondes sont séparées par une virgule (ex. 00:01:23,450). La norme WebVTT exige formellement un point décimal ASCII (00:01:23.450). La présence d'une seule virgule dans un fichier VTT entraîne le rejet immédiat de la piste par les navigateurs web.",
        "Notre outil effectue l'ensemble des opérations de conversion 100% en local dans votre navigateur web via JavaScript. Aucun fichier ni texte n'est envoyé sur des serveurs distants, vous garantissant un traitement instantané, une confidentialité absolue et aucune restriction de taille."
      ]
    },
    "srtVsVtt": {
      "title": "SRT vs VTT : Principales Différences Techniques",
      "content": [
        "Bien que les formats SRT et WebVTT partagent une structure similaire en apparence, plusieurs différences architecturales cruciales les distinguent :",
        "1. En-tête de Fichier Obligatoire : Un fichier SRT commence immédiatement à la première ligne par l'index \"1\". En revanche, un fichier WebVTT DOIT impérativement débuter par le mot \"WEBVTT\" sur sa toute première ligne. Sans cet en-tête, le navigateur ignore le fichier.",
        "2. Séparateur de Millisecondes : Le format SRT utilise des virgules (00:00:05,200), alors que WebVTT emploie des points (00:00:05.200). WebVTT autorise également des minutages courts sans heures (ex : 05.200 --> 08.400), bien que le format complet HH:MM:SS.mmm demeure le standard universel recommandé.",
        "3. Positionnement et Alignement à l'Écran : Le format SRT ne propose aucune méthode standardisée pour placer le texte à l'écran ; les sous-titres sont calés au centre en bas. WebVTT intègre des paramètres de disposition directement sur la ligne temporelle (\"line:10%\", \"position:80%\", \"align:left\", \"size:50%\"), évitant ainsi de masquer des éléments visuels importants.",
        "4. Personnalisation Visuelle et Styles : Le format SRT repose sur des balises historiques comme <i>, <b> ou <font color=\"...\"> souvent neutralisées pour des raisons de sécurité. WebVTT supporte les voix d'orateurs (<v Personnage>), les annotations ruby, les classes CSS (<c.alerte>) et le stylage complet avec le sélecteur ::cue.",
        "5. Compatibilité avec le Streaming HLS et DASH : Les protocoles de diffusion modernes tels qu'Apple HLS et MPEG-DASH distribuent les sous-titres sous forme de segments WebVTT. Tenter d'injecter des fichiers SRT bruts dans un flux HLS provoque des erreurs de lecture systématiques sur Safari et iOS."
      ]
    },
    "whyConvert": {
      "title": "Pourquoi Convertir du SRT en VTT ?",
      "benefits": [
        {
          "title": "Compatibilité Vidéo HTML5 Native",
          "description": "Lecture immédiate dans Google Chrome, Safari, Firefox et Edge via la balise <track>, sans lecteur flash ni script JavaScript externe."
        },
        {
          "title": "Personnalisation Complète avec CSS",
          "description": "Ajustez facilement la police, les couleurs de surbrillance, l'arrière-plan et les marges des sous-titres avec le pseudo-élément ::cue."
        },
        {
          "title": "Contrôle Précis de la Position",
          "description": "Placez vos sous-titres en haut, en bas ou sur les côtés pour ne pas masquer les bandeaux d'informations ou les visages des intervenants."
        },
        {
          "title": "Conforme aux Normes HLS et DASH",
          "description": "Le format requis par les architectures de diffusion modernes pour gérer des pistes de sous-titres multilingues synchronisées."
        },
        {
          "title": "Accessibilité Renforcée et Référencement SEO",
          "description": "Améliore l'accessibilité pour les personnes malentendantes et permet l'indexation de vos dialogues par les moteurs de recherche."
        },
        {
          "title": "Fichiers Ultra-Légers et Rapides",
          "description": "Format texte UTF-8 pesant seulement quelques kilo-octets, garantissant un chargement instantané sans altérer les Core Web Vitals."
        }
      ]
    },
    "howToConvert": {
      "title": "Comment Convertir SRT en VTT en 3 Étapes Simples",
      "steps": [
        {
          "title": "1. Collez le Texte ou Déposez votre Fichier .srt",
          "description": "Collez le texte dans le volet de gauche ou glissez-déposez votre fichier .srt dans la zone de téléversement. Vous pouvez aussi cliquer sur \"Choisir un Fichier SRT\"."
        },
        {
          "title": "2. Conversion Automatique et Instantanée",
          "description": "Le convertisseur analyse les blocs de sous-titres, ajoute l'en-tête WEBVTT, transforme les virgules en points et met à jour l'aperçu en temps réel."
        },
        {
          "title": "3. Téléchargez ou Copiez votre Fichier WebVTT",
          "description": "Cliquez sur \"Télécharger .vtt\" pour enregistrer votre fichier ou utilisez \"Copier dans le Presse-papiers\" pour intégrer directement le texte dans votre projet."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Erreurs Courantes dans les Sous-Titres SRT/VTT et Solutions",
      "items": [
        {
          "title": "Erreur : Les sous-titres ne s'affichent pas dans le navigateur (Virgule d'horodatage)",
          "description": "Cause : Le fichier contient des virgules dans les codes temporels (ex : 00:00:02,500). Les navigateurs rejettent ce format. Solution : Convertissez toutes les virgules en points (00:00:02.500) avec notre outil."
        },
        {
          "title": "Erreur : Le navigateur signale une erreur de syntaxe (En-tête WEBVTT manquant)",
          "description": "Cause : Renommer l'extension .srt en .vtt sans ajouter l'en-tête. Solution : La toute première ligne du document doit obligatoirement contenir \"WEBVTT\"."
        },
        {
          "title": "Erreur : Caractères accentués illisibles (Encodage et BOM)",
          "description": "Cause : Fichiers enregistrés en UTF-16, ANSI ou avec un indicateur d'ordre des octets (BOM). Solution : Notre convertisseur supprime le BOM invisible et produit de l'UTF-8 standard."
        },
        {
          "title": "Erreur : Sous-titres qui clignotent ou se chevauchent",
          "description": "Cause : Le sous-titre 1 se termine à 00:00:05.000 alors que le sous-titre 2 commence à 00:00:04.500. Solution : Vérifiez que l'heure de fin d'un bloc est antérieure ou égale au début du suivant."
        },
        {
          "title": "Erreur : Blocage lié aux règles CORS",
          "description": "Cause : Lorsque le fichier .vtt est hébergé sur un domaine distinct de la vidéo, le navigateur bloque la requête. Solution : Configurez l'en-tête \"Access-Control-Allow-Origin: *\" sur votre serveur."
        }
      ]
    },
    "html5VideoGuide": {
      "title": "Comment Utiliser des Sous-Titres VTT avec la Balise <video> HTML5",
      "description": "L'intégration de sous-titres WebVTT dans une page web est particulièrement simple : il suffit d'utiliser la balise native <track> imbriquée dans votre élément <video>. Voici le modèle de code recommandé :",
      "codeSnippet": "<video controls width=\"800\" poster=\"/images/affiche.jpg\">\n  <!-- Fichiers sources vidéo -->\n  <source src=\"/videos/cours.mp4\" type=\"video/mp4\">\n  <source src=\"/videos/cours.webm\" type=\"video/webm\">\n\n  <!-- Pistes de sous-titres WebVTT -->\n  <track \n    kind=\"subtitles\" \n    src=\"/sous-titres/cours-fr.vtt\" \n    srclang=\"fr\" \n    label=\"Français\" \n    default>\n  \n  <track \n    kind=\"subtitles\" \n    src=\"/sous-titres/cours-en.vtt\" \n    srclang=\"en\" \n    label=\"English\">\n\n  <p>Votre navigateur ne prend pas en charge la vidéo HTML5. <a href=\"/videos/cours.mp4\">Téléchargez la vidéo</a> pour la visionner.</p>\n</video>",
      "explanation": [
        {
          "term": "kind=\"subtitles\"",
          "description": "Définit le rôle de la piste. Utilisez \"subtitles\" pour traduire des dialogues ou \"captions\" pour des sous-titres sourds et malentendants incluant les bruits de fond."
        },
        {
          "term": "src=\"chemin/vers/fichier.vtt\"",
          "description": "L'URL relative ou absolue de votre fichier WebVTT. Assurez-vous que le serveur le délivre avec le type MIME \"text/vtt; charset=utf-8\"."
        },
        {
          "term": "srclang=\"fr\"",
          "description": "Le code de langue BCP 47 (comme \"fr\" pour le français, \"en\" pour l'anglais), indispensable pour les outils de synthèse vocale et de traduction."
        },
        {
          "term": "label=\"Français\"",
          "description": "L'intitulé affiché dans le menu des sous-titres (CC) du lecteur vidéo afin de permettre à l'utilisateur de choisir sa langue."
        },
        {
          "term": "default",
          "description": "Attribut indiquant que cette piste sera activée par défaut lors de la lecture du média."
        }
      ]
    },
    "comparison": {
      "title": "Tableau Comparatif : SRT vs WebVTT",
      "description": "Découvrez les caractéristiques techniques, niveaux de compatibilité et spécifications respectives de SubRip (.srt) et WebVTT (.vtt) :",
      "headers": [
        "Critère Technique",
        "SubRip (.srt)",
        "WebVTT (.vtt)"
      ],
      "rows": [
        [
          "Environnement d'Usage Principal",
          "Lecteurs de bureau (VLC) et montage vidéo",
          "Navigateurs web HTML5, applications mobiles et streaming"
        ],
        [
          "En-tête de Fichier Obligatoire",
          "Aucun (débute avec l'index 1)",
          "Obligatoire (\"WEBVTT\" à la première ligne)"
        ],
        [
          "Séparateur de Millisecondes",
          "Virgule (ex : 00:01:23,450)",
          "Point décimal (ex : 00:01:23.450)"
        ],
        [
          "Lecture Web Native",
          "Non (nécessite des scripts JS comme video.js)",
          "Oui (native via la balise <track> dans tous les navigateurs)"
        ],
        [
          "Prise en Charge des Styles",
          "Balises anciennes très restreintes (<i>, <b>, <font>)",
          "Contrôle complet avec CSS via le pseudo-élément ::cue"
        ],
        [
          "Positionnement sur l'Écran",
          "Non standardisé (centré en bas par défaut)",
          "Attributs natifs : line, position, size, align"
        ],
        [
          "Streaming HLS / MPEG-DASH",
          "Non compatible (doit être transcodé)",
          "Format standard pour les pistes de sous-titres en streaming"
        ],
        [
          "Métadonnées et Commentaires",
          "Aucune syntaxe officielle de commentaires",
          "Prise en charge des blocs NOTE et des en-têtes STYLE"
        ],
        [
          "Extension de Fichier Usuelle",
          ".srt",
          ".vtt"
        ],
        [
          "Type MIME Officiel",
          "application/x-subrip",
          "text/vtt; charset=utf-8"
        ]
      ]
    },
    "privacy": {
      "title": "Garantie de Confidentialité et Sécurité 100% Locale",
      "content": [
        "Sur SRTConverters.info, la sécurité de vos données et le respect de votre vie privée sont fondamentaux. Toutes les conversions entre SRT et WebVTT sont traitées exclusivement au sein de votre navigateur via JavaScript.",
        "Vos sous-titres, transcriptions professionnelles, documents juridiques et vidéos personnelles ne sont jamais envoyés ni conservés sur des serveurs externes. Vous pouvez même couper votre connexion internet après le chargement de la page : l'outil fonctionnera toujours sans aucune interruption.",
        "Cette architecture locale élimine tout risque de fuite de données, ce qui en fait une solution parfaite pour les entreprises, conférences internes, enregistrements médicaux et créateurs de contenu indépendants."
      ]
    }
  },
  "faqs": [
    {
      "question": "Puis-je simplement renommer l'extension .srt en .vtt ?",
      "answer": "Non. Renommer l'extension d'un fichier ne le transforme pas en WebVTT valide. WebVTT exige obligatoirement l'en-tête \"WEBVTT\" à la première ligne et impose des points à la place des virgules pour les millisecondes (00:00:01.000 au lieu de 00:00:01,000). Les navigateurs refuseront de charger un fichier SRT simplement renommé."
    },
    {
      "question": "Pourquoi mes sous-titres WebVTT ne s'affichent-ils pas dans mon lecteur HTML5 ?",
      "answer": "Il y a trois causes fréquentes : 1) La mention \"WEBVTT\" est absente de la première ligne ; 2) Les codes temporels contiennent encore des virgules ; ou 3) Votre serveur n'envoie pas le bon type MIME (text/vtt) ou bloque la ressource à cause des règles CORS. Notre convertisseur s'assure que votre syntaxe et vos horodatages sont 100% conformes."
    },
    {
      "question": "Quelle est la différence entre sous-titres de traduction (subtitles) et sous-titres pour malentendants (captions) ?",
      "answer": "Les sous-titres de traduction (kind=\"subtitles\") sont conçus pour les personnes qui entendent l'audio mais ne comprennent pas la langue parlée ; ils ne retranscrivent que les dialogues. Les sous-titres pour sourds et malentendants (kind=\"captions\") retranscrivent également les bruitages, l'ambiance sonore et l'identification des voix (ex : [Applaudissements], [Musique entraînante]). WebVTT prend en charge ces deux usages via l'attribut kind."
    },
    {
      "question": "Comment personnaliser l'apparence des sous-titres VTT en CSS ?",
      "answer": "Vous pouvez modifier l'aspect des sous-titres directement dans la feuille de style de votre site en utilisant le pseudo-élément ::cue. Par exemple : video::cue { background-color: rgba(0, 0, 0, 0.85); color: #ffffff; font-family: system-ui, sans-serif; font-size: 1.1rem; text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8); }"
    },
    {
      "question": "Le format WebVTT fonctionne-t-il sur smartphone (iPhone Safari et Android Chrome) ?",
      "answer": "Oui ! WebVTT est pris en charge sur tous les navigateurs mobiles modernes, y compris Safari sur iOS et Chrome sur Android. Lors du passage en plein écran, le système d'exploitation affiche automatiquement les sous-titres WebVTT selon les paramètres d'accessibilité définis par l'utilisateur."
    },
    {
      "question": "Puis-je importer des fichiers WebVTT (.vtt) sur YouTube et Vimeo ?",
      "answer": "Oui, YouTube et Vimeo prennent parfaitement en charge les fichiers de sous-titres WebVTT aux côtés du format SRT. WebVTT est particulièrement recommandé si vous avez défini des positions spécifiques pour éviter que le texte ne chevauche les synthés ou bandeaux vidéo."
    },
    {
      "question": "Existe-t-il une limite de taille de fichier sur ce convertisseur ?",
      "answer": "Non. Comme l'ensemble du traitement a lieu sur votre machine sans téléversement sur internet, il n'y a aucune limitation de taille, de durée ni de volume. Vous pouvez convertir des films complets ou des heures d'enregistrements sans contrainte."
    },
    {
      "question": "Ce convertisseur prend-il en charge les caractères accentués, les emojis et les alphabets non latins ?",
      "answer": "Oui. Notre convertisseur s'appuie sur un traitement UTF-8 natif, garantissant la préservation parfaite des accents de la langue française (é, è, à, ç, œ), des écritures non latines (arabe, japonais, coréen) et des emojis Unicode sans altération."
    }
  ]
};
