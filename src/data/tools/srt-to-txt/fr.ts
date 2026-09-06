import type { ToolDetailContent } from './types';

export const frContent: ToolDetailContent = {
  metaTitle: 'Convertisseur SRT en TXT Gratuit – Extraire le Texte des Sous-titres',
  metaDescription: 'Convertissez vos fichiers sous-titres SRT en texte brut TXT en ligne. Supprimez les codes temporels et numéros dans votre navigateur avec une confidentialité totale.',
  h1: 'Convertisseur SRT en TXT',
  heroDescription: 'Transformez rapidement vos fichiers de sous-titres SRT en transcriptions texte lisibles. Supprime les codes temporels, la numérotation et les balises de style directement dans votre navigateur.',
  toolName: 'Convertisseur SRT en TXT',
  ui: {
    pasteTitle: 'Entrée SRT (.srt)',
    pastePlaceholder: 'Collez votre contenu SRT ici (ex.\n1\n00:00:01,000 --> 00:00:04,000\nBonjour et bienvenue sur notre vidéo.)...',
    orDivider: 'OU',
    uploadTitle: 'Option 2 — Importer un fichier SRT',
    convertButton: 'Convertir en Texte',
    clearButton: 'Effacer',
    trySampleButton: 'Essayer un exemple',
    livePreviewTitle: 'Texte brut nettoyé (.txt)',
    errorNoInput: 'Veuillez coller du contenu SRT ou importer un fichier SRT pour convertir.',
    pastedContentSource: 'Contenu SRT collé',
    dropzoneTitle: 'Glissez-déposez votre fichier .srt ici',
    dropzoneSubtitle: 'ou cliquez pour sélectionner depuis votre appareil',
    browseButton: 'Choisir un fichier SRT',
    dropActiveText: 'Déposez le fichier SRT ici...',
    fileSelected: 'Fichier sélectionné',
    fileNameLabel: 'Nom du fichier',
    fileSizeLabel: 'Taille',
    cueCountLabel: 'Sous-titres extraits',
    characterCountLabel: 'Caractères',
    downloadAction: 'Télécharger .txt',
    copyAction: 'Copier dans le presse-papier',
    copiedSuccess: 'Copié dans le presse-papier !',
    resetAction: 'Convertir un autre fichier',
    previewTitle: 'Aperçu du texte converti',
    previewEmpty: 'Le texte converti apparaîtra ici dès le choix de votre fichier SRT.',
    optionsTitle: 'Options de conversion',
    optEmptyLine: 'Ajouter une ligne vide entre chaque réplique',
    optRemoveTags: 'Supprimer les balises de style (ex. <i>, <b>, <font>)',
    errorInvalidFile: 'Veuillez importer un fichier de sous-titres .srt valide.',
    errorEmptyFile: 'Le fichier sélectionné est vide.',
    errorParseFailed: 'Échec de l’analyse du fichier. Assurez-vous de son format SRT.',
  },
  sections: {
    whatIsSrt: {
      title: 'Qu’est-ce qu’un fichier SRT ?',
      content: [
        'Le format SRT (SubRip Subtitle) est le standard de sous-titrage le plus répandu en vidéo numérique. Il contient des blocs numérotés avec des repères temporels précis (début et fin) suivis du texte des répliques.',
        'Bien qu’idéal pour les lecteurs vidéo comme VLC ou les plateformes de streaming, la multitude de chiffres et d’horodatages rend sa lecture pénible sous forme de document classique.',
      ],
    },
    whatIsConverter: {
      title: 'Qu’est-ce qu’un convertisseur SRT en TXT ?',
      content: [
        'C’est un outil qui analyse la structure du fichier SRT afin d’en extraire uniquement le texte des dialogues en supprimant les horodatages et les numéros de séquence.',
        'Notre outil fonctionne à 100 % dans votre navigateur web. Aucun fichier n’est envoyé vers un serveur tiers, garantissant le respect absolu de votre vie privée.',
      ],
    },
    howToConvert: {
      title: 'Comment convertir un fichier SRT en TXT',
      steps: [
        {
          title: '1. Sélectionnez le fichier',
          description: 'Glissez-déposez votre fichier .srt dans la zone prévue ou cliquez sur le bouton de sélection.',
        },
        {
          title: '2. Conversion instantanée',
          description: 'Le texte est analysé en temps réel, débarrassé des repères de temps et des balises HTML.',
        },
        {
          title: '3. Téléchargez ou copiez',
          description: 'Téléchargez le fichier .txt final ou copiez le texte directement pour votre usage.',
        },
      ],
    },
    whyConvert: {
      title: 'Pourquoi convertir du SRT en TXT ?',
      benefits: [
        {
          title: 'Lecture et révision facilitées',
          description: 'Lisez des conférences, interviews ou podcasts comme un livre ou un article.',
        },
        {
          title: 'Idéal pour l’intelligence artificielle',
          description: 'Fournissez un texte épuré à ChatGPT ou Claude sans gaspiller de jetons sur les codes temporels.',
        },
        {
          title: 'Apprentissage des langues',
          description: 'Imprimez les dialogues de films pour étudier le vocabulaire et la grammaire.',
        },
        {
          title: 'Recherche textuelle rapide',
          description: 'Retrouvez facilement n’importe quel passage clé grâce à la recherche dans un document texte.',
        },
      ],
    },
    comparison: {
      title: 'Comparatif : SRT vs TXT',
      description: 'Les différences fondamentales entre le format de sous-titres et le texte brut.',
      headers: ['Critère', 'Format SRT (.srt)', 'Texte Brut (.txt)'],
      rows: [
        ['Rôle principal', 'Synchronisation vidéo des sous-titres', 'Lecture et documentation'],
        ['Horodatages', 'Oui (ex. 00:01:05,000 --> 00:01:10,000)', 'Aucun'],
        ['Numérotation', 'Oui (1, 2, 3...)', 'Aucune'],
        ['Balises de style', 'Balises HTML souvent présentes', 'Texte pur non formaté'],
        ['Usage optimal', 'Lecteurs vidéo et montage', 'Lecture, notes, IA'],
      ],
    },
    privacy: {
      title: 'Confidentialité et traitement local',
      content: [
        'Vos fichiers restent strictement sur votre machine. Tout le traitement s’effectue en local via JavaScript dans votre navigateur.',
        'L’outil reste même fonctionnel sans connexion internet une fois la page chargée.',
      ],
    },
  },
  faqs: [
    {
      question: 'Qu’est-ce qu’un fichier SRT ?',
      answer: 'C’est un fichier texte standard contenant le dialogue d’une vidéo avec des codes horaires de synchronisation.',
    },
    {
      question: 'Les horodatages et numéros sont-ils supprimés ?',
      answer: 'Oui, tous les repères de temps et numéros de réplique sont entièrement effacés.',
    },
    {
      question: 'Mon fichier est-il envoyé sur un serveur ?',
      answer: 'Non. Le traitement s’exécute à 100 % dans votre navigateur web sans aucun transfert.',
    },
    {
      question: 'Prend-il en charge les accents français ?',
      answer: 'Oui, tous les caractères accentués (é, è, à, ç, etc.) et encodages UTF-8 sont parfaitement gérés.',
    },
    {
      question: 'Puis-je l’utiliser sur smartphone ?',
      answer: 'Oui, l’interface est entièrement optimisée pour les téléphones et tablettes.',
    },
    {
      question: 'Les balises comme <i> et <b> sont-elles nettoyées ?',
      answer: 'Oui, les balises de mise en forme sont automatiquement supprimées.',
    },
    {
      question: 'L’outil est-il gratuit ?',
      answer: 'Oui, il est 100 % gratuit et ne requiert aucune inscription.',
    },
    {
      question: 'Y a-t-il une limite de taille ?',
      answer: 'Aucune limite contraignante, car le travail est exécuté par la mémoire de votre propre appareil.',
    },
  ],
};
