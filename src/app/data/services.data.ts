import type {IconName} from './icon-dictionary';

export interface Service {
  slug: string;
  nome: string;
  descrizioneBreve: string;
  descrizioneCompleta: string;
  icona: IconName;
  benefici: string[];
  processo: string[];
  immagine?: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'odontoiatria-estetica',
    nome: 'Odontoiatria Estetica',
    descrizioneBreve: 'Migliora l\'estetica del tuo sorriso con trattamenti personalizzati e tecnologie all\'avanguardia.',
    descrizioneCompleta: 'L\'odontoiatria estetica si concentra sul miglioramento dell\'aspetto del tuo sorriso attraverso una varietà di trattamenti moderni. Utilizziamo tecniche avanzate e materiali di alta qualità per creare risultati naturali e duraturi che valorizzano la tua bellezza unica.',
    icona: 'toothSparkle',
    benefici: [
      'Sorriso più luminoso e attraente',
      'Maggiore fiducia in se stessi',
      'Risultati naturali e personalizzati',
      'Trattamenti minimamente invasivi',
      'Materiali biocompatibili di ultima generazione'
    ],
    processo: [
      'Consulto iniziale e valutazione estetica',
      'Pianificazione del trattamento personalizzato',
      'Simulazione digitale del risultato',
      'Esecuzione del trattamento',
      'Follow-up e mantenimento'
    ]
  },
  {
    slug: 'ortodonzia',
    nome: 'Ortodonzia',
    descrizioneBreve: 'Allineamento dei denti con apparecchi tradizionali o invisibili per un sorriso perfetto.',
    descrizioneCompleta: 'L\'ortodonzia moderna offre soluzioni per ogni età, dall\'infanzia all\'età adulta. Utilizziamo tecnologie avanzate come gli allineatori trasparenti e apparecchi ortodontici di ultima generazione per correggere malocclusioni e migliorare sia l\'estetica che la funzionalità della masticazione.',
    icona: 'braces',
    benefici: [
      'Denti perfettamente allineati',
      'Miglioramento della masticazione',
      'Prevenzione di problemi articolari',
      'Opzioni invisibili disponibili',
      'Trattamenti personalizzati per ogni età'
    ],
    processo: [
      'Visita ortodontica completa',
      'Studio cefalometrico e radiografie',
      'Scelta dell\'apparecchio più adatto',
      'Applicazione e controlli periodici',
      'Fase di contenzione post-trattamento'
    ]
  },
  {
    slug: 'igiene-orale',
    nome: 'Igiene Orale',
    descrizioneBreve: 'Pulizia professionale e prevenzione per mantenere denti e gengive in salute.',
    descrizioneCompleta: 'L\'igiene orale professionale è fondamentale per la prevenzione di carie, gengiviti e altre patologie del cavo orale. I nostri igienisti utilizzano strumenti all\'avanguardia e tecniche delicate per rimuovere placca e tartaro, garantendo la salute a lungo termine dei tuoi denti e gengive.',
    icona: 'toothClean',
    benefici: [
      'Prevenzione di carie e malattie gengivali',
      'Rimozione completa di placca e tartaro',
      'Alito fresco e duraturo',
      'Sorriso più luminoso',
      'Consigli personalizzati per la cura quotidiana'
    ],
    processo: [
      'Esame del cavo orale',
      'Rimozione di placca e tartaro',
      'Lucidatura dei denti',
      'Applicazione di fluoro (se necessario)',
      'Istruzioni per l\'igiene domiciliare'
    ]
  },
  {
    slug: 'implantologia',
    nome: 'Implantologia',
    descrizioneBreve: 'Sostituzione permanente di denti mancanti con impianti dentali di alta qualità.',
    descrizioneCompleta: 'L\'implantologia dentale rappresenta la soluzione più avanzata e duratura per sostituire uno o più denti mancanti. Utilizziamo impianti in titanio di ultima generazione che si integrano perfettamente con l\'osso, offrendo stabilità, funzionalità e un aspetto completamente naturale.',
    icona: 'implant',
    benefici: [
      'Soluzione permanente e duratura',
      'Aspetto e funzione naturale',
      'Preservazione dell\'osso mascellare',
      'Non danneggia i denti adiacenti',
      'Alta percentuale di successo'
    ],
    processo: [
      'Valutazione radiografica 3D',
      'Pianificazione chirurgica digitale',
      'Inserimento dell\'impianto',
      'Periodo di osteointegrazione',
      'Applicazione della corona definitiva'
    ]
  },
  {
    slug: 'endodonzia',
    nome: 'Endodonzia',
    descrizioneBreve: 'Trattamenti canalari per salvare denti danneggiati o infetti.',
    descrizioneCompleta: 'L\'endodonzia si occupa della cura della polpa dentale e dei tessuti che circondano la radice del dente. Utilizziamo tecnologie moderne come microscopio operatorio e strumenti rotanti in nichel-titanio per trattamenti canalari precisi, confortevoli e con alte percentuali di successo.',
    icona: 'toothRoot',
    benefici: [
      'Salvataggio del dente naturale',
      'Eliminazione del dolore',
      'Trattamenti minimamente invasivi',
      'Alta precisione con microscopio',
      'Recupero rapido post-intervento'
    ],
    processo: [
      'Diagnosi e radiografie',
      'Anestesia locale',
      'Rimozione della polpa infetta',
      'Detersione e sagomatura dei canali',
      'Otturazione canalare definitiva'
    ]
  },
  {
    slug: 'sbiancamento',
    nome: 'Sbiancamento Dentale',
    descrizioneBreve: 'Trattamenti di sbiancamento professionale per un sorriso più luminoso.',
    descrizioneCompleta: 'Lo sbiancamento dentale professionale è un trattamento estetico sicuro ed efficace che permette di schiarire il colore naturale dei denti. Utilizziamo prodotti professionali certificati e tecniche all\'avanguardia per ottenere risultati visibili, duraturi e completamente personalizzati.',
    icona: 'shine',
    benefici: [
      'Sorriso più luminoso e giovane',
      'Risultati immediati e visibili',
      'Trattamento sicuro e controllato',
      'Opzioni domiciliari e in studio',
      'Effetto duraturo nel tempo'
    ],
    processo: [
      'Valutazione del colore iniziale',
      'Pulizia professionale preliminare',
      'Protezione delle gengive',
      'Applicazione del gel sbiancante',
      'Attivazione e monitoraggio del risultato'
    ]
  },
  {
    slug: 'parodontologia',
    nome: 'Parodontologia',
    descrizioneBreve: 'Cura e prevenzione delle malattie gengivali e dei tessuti di supporto del dente.',
    descrizioneCompleta: 'La parodontologia si occupa della prevenzione, diagnosi e trattamento delle malattie che colpiscono le gengive e i tessuti di supporto dei denti. Offriamo terapie conservative e chirurgiche avanzate per preservare la salute parodontale e prevenire la perdita dei denti.',
    icona: 'gums',
    benefici: [
      'Prevenzione della perdita dei denti',
      'Riduzione dell\'infiammazione gengivale',
      'Miglioramento della salute generale',
      'Trattamenti personalizzati',
      'Mantenimento a lungo termine'
    ],
    processo: [
      'Valutazione parodontale completa',
      'Sondaggio delle tasche gengivali',
      'Scaling e root planing',
      'Terapia chirurgica (se necessaria)',
      'Programma di mantenimento personalizzato'
    ]
  },
  {
    slug: 'odontoiatria-pediatrica',
    nome: 'Odontoiatria Pediatrica',
    descrizioneBreve: 'Cura dentale specializzata per bambini in un ambiente confortevole e accogliente.',
    descrizioneCompleta: 'L\'odontoiatria pediatrica si dedica alla salute orale dei più piccoli, dalla prima infanzia all\'adolescenza. Creiamo un ambiente accogliente e rassicurante dove i bambini possono sentirsi a proprio agio, imparando l\'importanza della cura dei denti attraverso un approccio gentile e giocoso.',
    icona: 'childTooth',
    benefici: [
      'Prevenzione precoce di problemi dentali',
      'Educazione all\'igiene orale',
      'Approccio psicologico adatto ai bambini',
      'Ambiente confortevole e giocoso',
      'Monitoraggio della crescita dentale'
    ],
    processo: [
      'Prima visita conoscitiva',
      'Valutazione della crescita dentale',
      'Educazione all\'igiene orale',
      'Trattamenti preventivi (sigillature, fluoro)',
      'Controlli periodici di crescita'
    ]
  }
];
