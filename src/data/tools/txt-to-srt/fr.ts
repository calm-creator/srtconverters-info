import type { TxtToSrtDetailContent } from "./types";

export const frContent: TxtToSrtDetailContent = {
  "metaTitle": "Convertisseur TXT en SRT Gratuit – Créer des Sous-titres à partir de Texte",
  "metaDescription": "Convertissez des transcriptions TXT et du texte brut en sous-titres SRT en ligne. Génération automatique de timecodes, réglages précis et traitement 100% privé dans le navigateur.",
  "h1": "Convertisseur TXT en SRT",
  "heroDescription": "Transformez vos scripts, transcriptions et textes bruts en fichiers de sous-titres SubRip (.srt) avec des timecodes séquentiels automatiques et personnalisables. Rapide, privé et gratuit.",
  "toolName": "Convertisseur TXT en SRT",
  "timingNotice": "Note sur la Synchronisation : Les fichiers texte bruts ne contiennent pas de codes temporels. Notre outil génère automatiquement des blocs numérotés et des timecodes selon vos réglages. Vous pouvez ensuite ajuster la synchronisation dans votre logiciel de montage.",
  "ui": {
    "pasteTitle": "Entrée Texte Brut (.txt)",
    "pastePlaceholder": "Collez votre texte ou transcription ici (chaque ligne ou paragraphe devient un sous-titre)...\n\nExemple :\nBonjour et bienvenue dans ce tutoriel vidéo.\nDans ce guide, nous explorons la conversion de sous-titres.\nPassons directement aux détails.",
    "orDivider": "OU",
    "uploadTitle": "Option 2 — Importer un Fichier TXT",
    "convertButton": "Convertir en SRT",
    "clearButton": "Effacer",
    "trySampleButton": "Essayer un Exemple",
    "livePreviewTitle": "Sous-Titres Générés (.srt)",
    "errorNoInput": "Veuillez coller du texte ou importer un fichier .txt à convertir.",
    "pastedContentSource": "Texte Collé",
    "dropzoneTitle": "Glissez et déposez votre fichier .txt ici",
    "dropzoneSubtitle": "ou cliquez pour parcourir vos fichiers",
    "browseButton": "Choisir un Fichier TXT",
    "dropActiveText": "Déposez le fichier TXT ici...",
    "fileSelected": "Fichier sélectionné",
    "fileNameLabel": "Nom du Fichier",
    "fileSizeLabel": "Taille du Fichier",
    "cueCountLabel": "Sous-Titres Créés",
    "characterCountLabel": "Caractères",
    "downloadAction": "Télécharger .srt",
    "copyAction": "Copier dans le Presse-Papiers",
    "copiedSuccess": "Copié dans le presse-papiers !",
    "resetAction": "Convertir un Autre Texte",
    "previewTitle": "Aperçu du SRT Généré",
    "previewEmpty": "Vos sous-titres SRT apparaîtront ici immédiatement après la saisie du texte.",
    "timingOptionsTitle": "Paramètres de Minutage et de Découpage",
    "optStartTime": "Temps Initial (secondes)",
    "optDuration": "Durée par Sous-Titre (secondes)",
    "optGap": "Intervalle entre Sous-Titres (secondes)",
    "optSplitMethod": "Découper le Texte Par",
    "optSplitParagraphs": "Paragraphes (Double saut)",
    "optSplitLines": "Chaque Ligne (Saut simple)",
    "optSplitSentences": "Phrases (. ? !)",
    "timingNoticeBadge": "Minutage Automatique Généré",
    "errorInvalidFile": "Veuillez importer un fichier texte (.txt) valide.",
    "errorEmptyFile": "Le fichier importé est vide.",
    "errorParseFailed": "Impossible d'extraire des lignes de texte valides."
  },
  "sections": {
    "whatIsTxt": {
      "title": "Qu'est-ce qu'un fichier texte brut (TXT) ?",
      "content": [
        "Un fichier TXT (.txt) est le format de document le plus universel en informatique. Il contient des caractères alphanumériques simples, des phrases et des retours à la ligne sans aucune mise en forme complexe, encodés en UTF-8 ou ASCII.",
        "Parce qu'ils ne possèdent aucune balise propriétaire, aucun style graphique ni en-tête lourd, les fichiers TXT s'ouvrent sans problème sur tous les systèmes d'exploitation, smartphones et éditeurs de texte. Les créateurs de contenu s'en servent fréquemment pour rédiger des scripts, transcrire des interviews ou traduire des dialogues.",
        "Cependant, un fichier texte brut ne possède aucun repère temporel ni numéro séquentiel permettant à un lecteur vidéo d'afficher les phrases au bon moment. L'ouverture d'un simple TXT dans un lecteur multimédia ou sur YouTube ne permettra pas d'afficher des sous-titres synchronisés."
      ]
    },
    "whatIsSrt": {
      "title": "Qu'est-ce qu'un fichier de sous-titres SRT (SubRip) ?",
      "content": [
        "Le format SRT (SubRip Text) est la référence mondiale pour les sous-titres vidéo et le sous-titrage pour sourds et malentendants. Pris en charge par YouTube, Vimeo, TikTok, Premiere Pro, Final Cut Pro, DaVinci Resolve et les lecteurs comme VLC, il organise les dialogues en séquences temporelles précises.",
        "Chaque bloc de sous-titre dans un fichier SRT valide respecte obligatoirement une structure en quatre parties :",
        "1. Un numéro d'ordre séquentiel (1, 2, 3, 4...)",
        "2. Des codes temporels précis de début et de fin sous la forme HH:MM:SS,mmm --> HH:MM:SS,mmm (Heures:Minutes:Secondes,Millisecondes)",
        "3. Une ou plusieurs lignes de texte correspondant aux paroles prononcées",
        "4. Une ligne vide séparatrice marquant la fin du sous-titre",
        "Sans cette structure stricte, les lecteurs vidéo et les logiciels de montage ne peuvent pas déterminer l'instant où le sous-titre doit apparaître, sa durée d'affichage, ni le moment où il doit disparaître."
      ]
    },
    "whatIsConverter": {
      "title": "Qu'est-ce qu'un Convertisseur TXT en SRT ?",
      "content": [
        "Un convertisseur TXT vers SRT est un outil de mise en forme intelligent conçu pour transformer du texte brut sans repère temporel en un véritable fichier de sous-titres prêt pour la vidéo.",
        "Il prend en charge vos transcriptions, scripts de voix off, interviews et textes traduits pour générer des fichiers SubRip (.srt) complets, comprenant la numérotation séquentielle, les flèches de timecode valides (-->), la précision à la milliseconde et l'espacement requis.",
        "Notre convertisseur fonctionne intégralement dans votre navigateur grâce aux API Web modernes. Vos documents confidentiels, scripts inédits et transcriptions privées ne quittent jamais votre appareil."
      ]
    },
    "howToConvert": {
      "title": "Comment convertir un fichier TXT en SRT étape par étape",
      "steps": [
        {
          "title": "1. Collez le texte ou importez votre fichier",
          "description": "Saisissez ou collez votre transcription dans la zone de texte, ou sélectionnez un fichier .txt depuis votre ordinateur ou smartphone."
        },
        {
          "title": "2. Choisissez le découpage et les durées",
          "description": "Sélectionnez le mode de découpage (lignes, paragraphes ou phrases) et définissez la durée par sous-titre (ex. 3.0s) ainsi que la pause intermédiaire (ex. 0.5s)."
        },
        {
          "title": "3. Aperçu instantané en direct",
          "description": "Le panneau d'aperçu génère immédiatement les sous-titres SRT avec des timecodes séquentiels précis à la milliseconde."
        },
        {
          "title": "4. Téléchargez ou copiez le résultat",
          "description": "Cliquez sur \"Télécharger .srt\" pour enregistrer le fichier sur votre appareil, ou copiez le texte pour l'utiliser dans votre logiciel de montage."
        }
      ]
    },
    "whyRenameDoesntWork": {
      "title": "Pourquoi renommer un fichier .txt en .srt ne fonctionne pas",
      "content": [
        "Une idée reçue courante consiste à croire qu'il suffit de remplacer l'extension '.txt' par '.srt' pour que le fichier se transforme magiquement en sous-titres vidéo.",
        "Changer l'extension ne modifie que l'étiquette du fichier pour le système d'exploitation, mais ne transforme pas son contenu. Les lecteurs comme VLC ou QuickTime exigent la syntaxe spécifique de SubRip. S'ils trouvent du texte brut sans numéros et sans timecodes du type '00:00:00,000 --> 00:00:00,000', ils ignoreront le fichier ou afficheront une erreur.",
        "Renommer le fichier ne fonctionne que s'il contenait déjà la structure exacte d'un fichier SRT sauvegardé par mégarde avec l'extension .txt. Pour les textes et transcriptions classiques, une vraie conversion est indispensable."
      ]
    },
    "timingAndSyncExplanation": {
      "title": "Comprendre le calcul des timecodes : comment fonctionne l'automatisation",
      "content": [
        "Puisque les fichiers texte ordinaires ne possèdent aucune indication d'horodatage, notre outil applique un calcul chronologique régulier.",
        "À partir du point de départ défini (par défaut 00:00:01,000), chaque bloc de texte se voit attribuer une fenêtre d'affichage égale à la durée choisie (ex. 3,0 secondes). Après chaque sous-titre, l'algorithme insère un intervalle de pause (ex. 0,5 seconde) avant d'enchaîner sur le bloc suivant.",
        "Si votre texte contient déjà des repères d'horodatage identifiables (comme [01:23] ou 00:02:15), notre analyseur intelligent les détecte et calcule automatiquement les points de début et de fin correspondants.",
        "Conseil de synchronisation pratique : Les horodatages automatiques constituent une base propre et parfaitement formatée. Comme la voix humaine comporte des accélérations et des silences naturels, quelques ajustements légers dans Premiere Pro, DaVinci Resolve ou YouTube Studio peuvent être utiles pour coller parfaitement au rythme des voix."
      ]
    },
    "realWorldUseCases": {
      "title": "Cas d'usage concrets de la conversion TXT en SRT",
      "cases": [
        {
          "title": "Sous-titres pour vidéos YouTube et référencement SEO",
          "description": "Ajoutez des sous-titres structurés pour améliorer le positionnement de vos vidéos dans les recherches, toucher un public international et booster la durée de visionnage."
        },
        {
          "title": "Transcriptions de podcasts et webinaires",
          "description": "Convertissez vos enregistrements transcrits en pistes de sous-titres pour vos extraits vidéo, audiogrammes et teasers sur les réseaux sociaux."
        },
        {
          "title": "Traduction de contenus audiovisuels",
          "description": "Traduisez le script d'une vidéo étrangère en texte brut, convertissez-le en fichier SRT puis importez-le dans votre logiciel de montage."
        },
        {
          "title": "Post-traitement de la reconnaissance vocale IA",
          "description": "Transformez les données brutes issues de Whisper AI, de dictées vocales ou de comptes-rendus de réunion en fichiers de sous-titres exploitables."
        },
        {
          "title": "Cours en ligne et formation à distance",
          "description": "Fournissez des sous-titres conformes aux normes d'accessibilité numérique pour vos cours universitaires, tutoriels et modules e-learning."
        },
        {
          "title": "Formats verticaux pour réseaux sociaux (Reels, TikTok)",
          "description": "Importez vos fichiers SRT dans CapCut, Premiere ou Final Cut pour intégrer des sous-titres animés et percutants sur vos vidéos courtes."
        }
      ]
    },
    "commonErrorsAndFixes": {
      "title": "Problèmes fréquents et conseils de dépannage",
      "items": [
        {
          "title": "Les sous-titres défilent trop vite ou restent trop longtemps",
          "description": "Ajustez la durée par sous-titre dans les réglages. Les phrases rapides nécessitent souvent 2 à 3 secondes, tandis que les phrases longues demandent 4 à 5 secondes."
        },
        {
          "title": "Les sous-titres se chevauchent sur la vidéo",
          "description": "Notre outil garantit un intervalle mathématique précis sans chevauchement. Veillez simplement à régler la pause entre sous-titres à au moins 0,2 à 0,5 seconde."
        },
        {
          "title": "Caractères accentués illisibles ou corrompus (mojibake)",
          "description": "Ce problème survient avec les encodages anciens comme ANSI. Notre convertisseur fonctionne exclusivement en UTF-8 universel pour conserver tous les accents et caractères spéciaux."
        },
        {
          "title": "Lignes de texte trop longues sur smartphone",
          "description": "Utilisez le mode de découpage par 'Phrases' ou par 'Lignes' pour éviter les gros blocs de texte et maintenir moins de 42 caractères par ligne."
        }
      ]
    },
    "comparison": {
      "title": "TXT vs SRT : Comparatif technique",
      "description": "Découvrez les différences fondamentales entre le texte brut sans timing et les fichiers de sous-titres SubRip structurés.",
      "headers": [
        "Critère Technique",
        "Texte Brut (.txt)",
        "Sous-titre SubRip (.srt)"
      ],
      "rows": [
        [
          "Repères Temporels",
          "Aucun (sans horodatage)",
          "Précision à la milliseconde (HH:MM:SS,mmm)"
        ],
        [
          "Numérotation Séparée",
          "Aucune",
          "Nombres entiers séquentiels obligatoires (1, 2, 3...)"
        ],
        [
          "Flèche Séparatrice",
          "Aucune",
          "Flèche standard obligatoire (-->)"
        ],
        [
          "Compatibilité Lecteurs",
          "Ne peut pas être chargé comme sous-titre",
          "Lecture native dans VLC, YouTube, etc."
        ],
        [
          "Logiciels de Montage",
          "Nécessite un placement manuel",
          "S'insère directement sur la piste de sous-titres"
        ],
        [
          "Balises de Style",
          "Texte pur",
          "Prise en charge de balises basiques (<i>, <b>, <font>)"
        ],
        [
          "Usage Principal",
          "Lecture documentaire et archivage",
          "Synchronisation audiovisuelle exacte"
        ]
      ]
    },
    "privacy": {
      "title": "Garantie de confidentialité 100% locale",
      "content": [
        "Votre sécurité et la protection de vos données sont garanties par l'architecture même de notre service. Contrairement aux convertisseurs distants qui téléversent vos scripts sur des serveurs tiers, notre outil effectue l'intégralité du travail dans la mémoire de votre navigateur.",
        "Vos scripts de tournage, transcriptions juridiques et documents confidentiels ne transitent jamais sur Internet. Vous pouvez même couper votre connexion Internet après le chargement de la page : l'outil continuera de fonctionner sans interruption."
      ]
    }
  },
  "faqs": [
    {
      "question": "Comment convertir un fichier TXT en SRT ?",
      "answer": "Collez votre texte dans la zone de saisie ou sélectionnez votre fichier .txt. Choisissez le mode de découpage souhaité ainsi que la durée par réplique. Le convertisseur calcule instantanément les codes temporels et génère un fichier .srt prêt à être téléchargé."
    },
    {
      "question": "Peut-on convertir du TXT en SRT sans installer de logiciel ?",
      "answer": "Oui. L'outil fonctionne directement dans n'importe quel navigateur web moderne sur ordinateur, tablette ou smartphone, sans logiciel ni extension à installer."
    },
    {
      "question": "Un fichier TXT standard contient-il des horodatages de sous-titres ?",
      "answer": "Non. Les fichiers TXT ne contiennent que du texte brut sans aucune information temporelle. C'est pourquoi notre convertisseur applique automatiquement des timecodes séquentiels réguliers."
    },
    {
      "question": "Comment l'outil génère-t-il les timecodes ?",
      "answer": "Il applique un algorithme de cadencement régulier. À partir du temps initial défini (ex. 1.0s), chaque sous-titre se voit accorder la durée sélectionnée (ex. 3.0s), suivie de la pause choisie (ex. 0.5s) avant le sous-titre suivant."
    },
    {
      "question": "Puis-je convertir un scénario ou une transcription complète ?",
      "answer": "Oui. Il vous suffit de copier l'intégralité de votre texte et de le coller dans l'outil. Le découpage par ligne ou par phrase créera un sous-titre individuel pour chaque réplique."
    },
    {
      "question": "Le fichier SRT créé est-il compatible avec YouTube ?",
      "answer": "Oui. Le fichier .srt généré respecte fidèlement la norme SubRip et peut être téléversé directement dans YouTube Studio dans l'onglet Sous-titres de votre vidéo."
    },
    {
      "question": "Pourquoi ne suffit-il pas de remplacer l'extension .txt par .srt ?",
      "answer": "Renommer un fichier ne modifie pas sa structure intérieure. Les lecteurs vidéo requièrent une syntaxe précise faite d'indices numériques et de flèches horaires (00:00:01,000 --> 00:00:04,000) pour afficher les sous-titres."
    },
    {
      "question": "Puis-je modifier les timecodes après la conversion ?",
      "answer": "Oui. Le fichier .srt est un format texte modifiable dans n'importe quel éditeur de texte (Bloc-notes, TextEdit) ou dans des logiciels comme Subtitle Edit, Premiere Pro ou DaVinci Resolve."
    },
    {
      "question": "L'outil gère-t-il d'autres langues comme l'arabe, le japonais ou l'espagnol ?",
      "answer": "Oui. Il assure une prise en charge intégrale de l'UTF-8 pour tous les alphabets du monde, y compris l'arabe de droite à gauche, les caractères japonais, coréens ou l'écriture devanagari."
    },
    {
      "question": "Mon fichier texte est-il transféré vers un serveur ?",
      "answer": "Non. L'ensemble des opérations s'effectue localement sur votre ordinateur ou smartphone grâce à JavaScript. Vos fichiers ne quittent jamais votre machine."
    },
    {
      "question": "Que faire si les sous-titres sont légèrement décalés par rapport à la voix ?",
      "answer": "Comme le calcul automatique applique une durée moyenne, vous pouvez modifier les réglages de durée dans l'outil, ou décaler légèrement la piste de sous-titres dans votre logiciel de montage vidéo pour l'adapter aux respirations réelles du locuteur."
    },
    {
      "question": "Quelle est la durée conseillée pour un sous-titre ?",
      "answer": "Les recommandations audiovisuelles internationales préconisent une vitesse de lecture de 21 à 24 caractères par seconde, soit environ 2,5 à 4 secondes pour une ligne courante de 30 à 40 caractères."
    }
  ]
};
