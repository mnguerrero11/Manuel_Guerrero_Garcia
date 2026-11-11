/* English copy: index.html. Spanish copy: translations.es below. */
const translations = {
  "es": {
    "portraitAlt": "Retrato de Manuel Guerrero García",
    "navAbout": "Perfil",
    "navWork": "Experiencia",
    "navResearch": "Investigación",
    "navLearning": "Competencias",
    "navContact": "Contacto",
    "heroEyebrow": "INGENIERÍA DE DATOS E IA APLICADA",
    "heroLead": "Desarrollo soluciones de integración y procesamiento distribuido de datos con Python, PySpark y SQL. Trabajo en modernización de ETL, análisis de sistemas heredados y validación de la calidad del dato en entornos corporativos.",
    "heroNote": "Máster en Ingeniería Informática, con especialización en Big Data y Cloud Computing. Investigación académica en procesamiento del lenguaje natural, modelos de lenguaje y detección multimodal de sexismo.",
    "exploreWork": "Experiencia profesional",
    "downloadCV": "Descargar CV",
    "atGlance": "INFORMACIÓN PROFESIONAL",
    "currentRoleLabel": "PUESTO ACTUAL",
    "focusLabel": "ÁREAS DE TRABAJO",
    "focusValue": "ETL, procesamiento distribuido y modernización de plataformas de datos",
    "basedLabel": "UBICACIÓN",
    "basedValue": "Huelva, España",
    "aboutHeading": "Perfil profesional",
    "aboutP1": "Trabajo en NTT DATA en proyectos de datos para los sectores energético, ambiental, sanitario y de administración pública. Mis responsabilidades incluyen revisar procesos existentes, desarrollar pipelines, migrar transformaciones y validar resultados entre origen y destino.",
    "aboutP2": "Mi trabajo técnico incluye analizar código MATLAB y procesos ETL sin documentación, implementar cargas distribuidas sobre Cloudera/YARN e integrar fuentes Oracle, Hive y HBase. Utilizo modelos de lenguaje locales como apoyo al análisis de código, con verificación técnica de sus resultados.",
    "aboutP3": "En paralelo a la experiencia profesional, he realizado investigación académica con Transformers, modelos de lenguaje y modelos de visión y lenguaje. Los proyectos de investigación que se presentan más adelante recogen su alcance y enlazan a las publicaciones correspondientes.",
    "workHeading": "Experiencia profesional",
    "workIntro": "Proyectos desarrollados en NTT DATA, con su contexto técnico, mis responsabilidades y las tecnologías utilizadas. La identidad de los clientes y algunos detalles de las plataformas se presentan de forma generalizada.",
    "presentPosition": "POSICIÓN ACTUAL",
    "positionContext": "Sevilla · Noviembre de 2023 — Actualidad · Data Engineer desde septiembre de 2026",
    "projOneSector": "SECTOR ENERGÉTICO · PLATAFORMA CORPORATIVA",
    "projOneType": "Data discovery · arquitectura · análisis asistido por IA",
    "projOneTitle": "Análisis y modernización de una plataforma de datos legacy",
    "projOneIntro": "Evaluación técnica de una plataforma corporativa de previsión con más de 500 GB de datos heterogéneos y más de 2.000 archivos MATLAB. El trabajo se centró en inventariar activos, reconstruir dependencias y definir requisitos para su modernización.",
    "energyMetric1": "Datos legacy evaluados",
    "energyMetric2": "Archivos MATLAB analizados",
    "problemHeading": "Contexto técnico",
    "contributionHeading": "Mis responsabilidades",
    "energyProblem": "Un repositorio heredado vinculado a procesos de previsión combinaba ficheros .mat, .txt y .csv con miles de ETL escritos en MATLAB. El linaje de datos, las integraciones externas y muchas reglas de procesamiento no estaban documentadas de manera unificada y utilizable.",
    "energyContribution": "Desarrollé analizadores propios en Python para discovery estructural, inspección de archivos, reconstrucción de dependencias y clasificación de procesos. Además, experimenté con LLM ligeros ejecutados localmente sobre CPU para apoyar el análisis semántico del código MATLAB y señalar referencias a APIs, autenticación y sistemas de origen que debían revisarse.",
    "projectDetailsLabel": "Leer el enfoque técnico",
    "energyStageOneTitle": "01 · Discovery e ingeniería inversa",
    "energyStageOne": "Análisis mediante Python de conjuntos de datos heterogéneos y activos ETL heredados, orientado a reconstruir el movimiento del dato, identificar dependencias con otros sistemas y detectar procesos redundantes o susceptibles de consolidación.",
    "energyStageTwoTitle": "02 · Análisis de código con LLM locales",
    "energyStageTwo": "Experimenté con modelos de lenguaje ejecutados localmente para apoyar el análisis semántico de scripts MATLAB, identificar referencias a sistemas externos e investigar dependencias. Revisé los resultados de los modelos como parte del análisis técnico.",
    "energyStageThreeTitle": "03 · Diseño de modernización",
    "energyStageThree": "La línea de arquitectura contempla esquemas de destino, racionalización de ETL, necesidades de infraestructura, integración con Databricks y migración hacia almacenamiento basado en Parquet, junto con validación y reconciliación entre origen y destino.",
    "scopeNoteHeading": "Alcance y estado de ejecución",
    "energyScopeNote": "Realicé el discovery y la evaluación técnica. La conversión de datos, las nuevas ingestas en Python, las pruebas UAT y el paso a producción forman parte del alcance propuesto de modernización y no se presentan como tareas ya ejecutadas.",
    "projTwoSector": "SECTOR PÚBLICO · DATOS AMBIENTALES",
    "projTwoType": "Procesamiento distribuido · pipelines en producción",
    "projTwoTitle": "Pipelines PySpark para datos ambientales",
    "projTwoIntro": "Desarrollo y mantenimiento de pipelines ETL para sistemas de información ambiental y de calidad del aire, incluida la migración de transformaciones Pentaho a ejecución distribuida con Apache Spark.",
    "envProblem": "Era necesario mantener y modernizar procesos ETL heredados sin comprometer la integridad de grandes volúmenes de información destinados a análisis, reporting y obligaciones regulatorias.",
    "envContribution": "Diseñé, implementé y optimicé procesos ETL en PySpark sobre Cloudera/YARN, migré flujos Pentaho a pipelines Spark distribuidos e integré datos de Oracle, HDFS, Hive y HBase. El trabajo incluyó validación del dato, trazabilidad, análisis de cuellos de botella y procesamiento de conjuntos con decenas de millones de registros.",
    "envDetails": "Analicé las reglas de transformación existentes, implementé su equivalente en PySpark y validé los resultados frente a los procesos de origen. También analicé cuellos de botella y uso de recursos en Cloudera/YARN, con controles de calidad del dato para la ejecución repetible en producción.",
    "projThreeSector": "SANIDAD · GOBIERNO DEL DATO",
    "projThreeType": "Integración de datos · gobernanza",
    "projThreeTitle": "Integración de datos sanitarios con Stratio y Oracle",
    "projThreeIntro": "Desarrollo de procesos de integración y ETL sobre una plataforma corporativa de información sanitaria con requisitos de gobierno del dato.",
    "healthContribution": "Desarrollé procesos ETL y de integración con Stratio y Oracle, incluyendo modelado de datos, transformaciones y cargas en un entorno corporativo con requisitos de gobierno.",
    "projFourSector": "SECTOR PÚBLICO · BUSINESS INTELLIGENCE",
    "projFourType": "Ecosistema Oracle · analítica",
    "projFourTitle": "Integración de datos y business intelligence con Oracle",
    "projFourIntro": "Configuración de entornos de integración de datos Oracle y desarrollo de cuadros de mando analíticos para reporting en el sector público.",
    "biContribution": "Instalé y configuré entornos Oracle Data Integrator 12c, incluidos repositorios y componentes ETL, y desarrollé cuadros de mando y soluciones de reporting con Oracle Analytics Server 7.0. También apoyé tareas de explotación y administración relacionadas con Oracle 19c.",
    "researchHeading": "Proyectos de investigación",
    "researchIntro": "Investigación académica en detección de sexismo mediante procesamiento del lenguaje natural y modelos multimodales, incluido el estudio del desacuerdo entre anotadores.",
    "researchOneTitle": "Multimodal sexism detection",
    "researchOneDesc": "Investigación sobre detección de sexismo en contenido multimodal mediante modelos de visión y lenguaje y grandes modelos de lenguaje, incluidos BLIP2 y Qwen. Publicada en el contexto de CLEF 2025 / EXIST 2025.",
    "viewPublication": "Ver publicación",
    "researchTwoTitle": "Learning from divergence and perspectivism",
    "researchTwoDesc": "Investigación derivada de mi TFG sobre identificación de sexismo y clasificación de la intención de origen mediante Transformers y aprendizaje a partir del desacuerdo entre anotadores.",
    "learningHeading": "Competencias técnicas",
    "learningIntro": "Tecnologías utilizadas en proyectos profesionales e investigación académica. Las materias actualmente en estudio se indican por separado.",
    "skillOne": "Ingeniería de datos",
    "skillTwo": "Plataformas y cloud",
    "skillThree": "IA aplicada e investigación",
    "skillFour": "Áreas de aprendizaje actuales",
    "certHeading": "Certificaciones profesionales",
    "educationHeading": "Formación académica",
    "msc": "Máster en Ingeniería Informática",
    "bsc": "Grado en Ingeniería Informática",
    "mobility": "Ingeniería Informática",
    "quantum": "Computación y Tecnologías Cuánticas",
    "contactIntro": "Para oportunidades relacionadas con ingeniería de datos, modernización de plataformas o investigación en IA aplicada, puedes contactar conmigo por correo electrónico o descargar mi CV.",
    "contactLanguage": "Español · Nativo / Inglés · B2 (Cambridge)",
    "footerNote": "Ingeniería de datos · IA aplicada",
    "backTop": "Volver arriba",
    "navEducation": "Formación",
    "heroRole": "Ingeniero de datos",
    "educationLink": "Formación y certificaciones",
    "educationIntro": "Formación universitaria en Ingeniería Informática, con especialización en sistemas de datos y cloud computing, movilidad académica internacional y estudios complementarios en computación cuántica.",
    "mastersLevel": "MÁSTER UNIVERSITARIO",
    "bachelorsLevel": "GRADO UNIVERSITARIO",
    "extensionLevel": "DIPLOMA DE EXTENSIÓN UNIVERSITARIA",
    "mobilityLevel": "MOVILIDAD ACADÉMICA INTERNACIONAL",
    "mscFocus": "Especialización en Big Data y Cloud Computing",
    "bscFocus": "Ingeniería del Software",
    "quantumScope": "1.000 horas · Equivalencia de 40 ECTS",
    "mobilityScope": "Movilidad académica internacional en Nápoles, Italia",
    "certIntro": "Certificaciones en ingeniería de datos, fundamentos de cloud, generación aumentada por recuperación e IA agéntica.",
    "professionalDate": "Octubre de 2026",
    "associateDate": "Septiembre de 2026",
    "awsDate": "Válida hasta abril de 2029",
    "certificationInfo": "Información de la certificación",
    "ibmRagScope": "Generación aumentada por recuperación (RAG), bases de datos vectoriales y orquestación de agentes de IA con LangChain, LangGraph y MCP.",
    "programInfo": "Información del programa",
    "contactHeading": "Contacto",
    "divergence_objective_heading": "1. Objetivo y tareas de clasificación",
    "divergence_objective_p0": "Desarrollé el sistema técnico y experimental presentado por I2C-UHU a EXIST 2024 para identificar sexismo y clasificar la intención de origen en tuits en español e inglés. Son problemas relacionados, pero diferentes: un mensaje puede contener sexismo porque expresa discriminación, relata una experiencia o critica ese comportamiento. Detectar una referencia al sexismo no permite deducir por sí solo la posición de quien escribe. Organicé los experimentos alrededor de esta distinción, sin interpretar todos los ejemplos positivos como una defensa del lenguaje sexista.",
    "divergence_objective_p1": "La tarea 1 predice YES o NO. La tarea 2 distingue DIRECT, REPORTED y JUDGEMENTAL dentro de la rama de contenido sexista, conservando NO en la salida jerárquica. El objetivo fue comparar arquitecturas, seleccionar modelos con evidencia de desarrollo y generar las decisiones hard y salidas soft requeridas por la competición. La aportación de investigación combina clasificación multilingüe, análisis de anotaciones subjetivas y una secuencia de experimentos con baselines, optimización y evaluación.",
    "divergence_data_heading": "2. Estructura de los datos y análisis de anotaciones",
    "divergence_data_p0": "Trabajé con los archivos JSON de la organización: 6.920 tuits de entrenamiento, de los que 3.660 estaban en español y 3.260 en inglés, y 1.038 de desarrollo, con 549 en español y 489 en inglés. Cada registro relaciona texto e idioma con seis anotaciones y descriptores demográficos. Analicé las frecuencias de clase, la distribución lingüística y los grupos de género y edad de las anotaciones, porque condicionan la especialización de los modelos y la interpretación del desacuerdo.",
    "divergence_data_p1": "El esquema distingue la partición de desarrollo facilitada por la organización de los subconjuntos internos de entrenamiento y validación utilizados en las diferentes versiones. Preparé conjuntos por idioma y por grupo de anotación, en lugar de asumir que una única agregación servía para todas las tareas. Una referencia hard reduce las anotaciones a una categoría seleccionada; una referencia soft conserva su distribución. Mantener ambas representaciones permitió investigar clasificación basada en consenso y modelos perspectivistas. Los grupos demográficos representan perspectivas de anotación, no nuevos tuits independientes ni un recuento de personas anotadoras únicas.",
    "divergence_baselines_heading": "3. Baselines y comparación de arquitecturas",
    "divergence_baselines_p0": "Comparé inicialmente cuatro familias de Transformers preentrenados: XLM-RoBERTa Base, DeBERTa v3 Base, RoBERTa Base BNE para español y BERT multilingüe. El baseline A aprendía conjuntamente NO, DIRECT, REPORTED y JUDGEMENTAL. El baseline B separaba la detección binaria de sexismo de la clasificación posterior de intención. Esta comparación permitía estudiar si la jerarquía debía aprenderse en un único espacio de salida o expresarse como dos decisiones. También hacía visibles las dificultades de las categorías minoritarias de intención, que un buen resultado para NO podía ocultar.",
    "divergence_baselines_p1": "La configuración inicial utilizaba lotes de 32, learning rate de 2e-5, longitud máxima de 128 y weight decay de 0,01. En el baseline binario, XLM-RoBERTa obtuvo F1 de 0,7807; su baseline de tres clases registró F1 de 0,568331. Son experimentos de desarrollo, no resultados del test oficial. Las puntuaciones de las formulaciones de cuatro clases, binarias y de tres clases responden a preguntas distintas y no deben interpretarse como un único porcentaje de mejora directamente comparable. La comparación orientó el diseño posterior en dos etapas y la selección de modelos candidatos.",
    "divergence_preprocessing_heading": "4. Limpieza y normalización del texto",
    "divergence_preprocessing_p0": "Implementé el preprocesamiento descrito en el artículo: conversión a minúsculas y eliminación de enlaces, menciones, marcas de retuit, hashtags y emojis. El propósito era reducir variaciones asociadas a cuentas y formatos antes de clasificar. También se exploró la verbalización de emojis; el artículo señala que no mejoró los experimentos, por lo que se eliminaron en la preparación seleccionada. Estas decisiones corresponden a esta configuración experimental y no implican que esa información sea irrelevante para detectar sexismo o intención en cualquier contexto.",
    "divergence_preprocessing_p1": "El preprocesamiento debía interpretarse junto al análisis de errores. Eliminar marcas propias de las redes sociales puede simplificar las entradas y, al mismo tiempo, perder pistas contextuales, especialmente en citas o críticas irónicas. Por ello, la normalización se presenta como una decisión de modelado con contrapartidas, no como una garantía de mejor comprensión semántica. La selección de modelos por idioma siguió siendo relevante tras la limpieza: el preentrenamiento específico de español e inglés proporciona representaciones diferentes aunque la preparación superficial aplique las mismas reglas.",
    "divergence_optimization_heading": "5. Balanceo de clases y búsqueda de hiperparámetros",
    "divergence_optimization_p0": "Para abordar el desbalance de intención amplié REPORTED y JUDGEMENTAL mediante backtranslation, manteniendo DIRECT con su tamaño original. Utilicé modelos de traducción Helsinki-NLP/OPUS para generar variantes léxicas y sintácticas. Los ejemplos españoles siguieron la ruta español → inglés → alemán → español; los ingleses, inglés → alemán → español → inglés. Así se incrementaba la variedad disponible en las clases minoritarias sin repetir únicamente filas idénticas. La técnica también introduce una limitación: la traducción puede alterar el significado pragmático, especialmente en sarcasmos y expresiones culturales.",
    "divergence_optimization_p1": "Después utilicé Optuna para explorar batch sizes de 8, 16 y 32; learning rates de 3e-5 y 5e-5; y weight decay de 0,001, 0,01 y 0,1. La búsqueda empleó subconjuntos reducidos de entrenamiento y validación para controlar el coste computacional. En la comparación publicada, el F1 binario de XLM-RoBERTa pasó de 0,7807 a 0,7876 tras aumento y optimización. Es evidencia de ese experimento combinado, no una estimación aislada del efecto causal del aumento de datos. La tabla de configuración separa el baseline inicial del espacio de búsqueda posterior.",
    "divergence_training_heading": "6. Entrenamiento y modelos especializados por idioma",
    "divergence_training_p0": "Implementé el entrenamiento con Hugging Face Trainer y el optimizador adamw_torch, evaluando al final de cada época, conservando checkpoints y seleccionando el modelo según F1. Los experimentos iniciales permitían hasta diez épocas, con una paciencia de early stopping de tres. El trabajo publicado documenta ejecución sobre una RTX 4070. Esta configuración permitía repetir comparaciones sin asumir que una época final fija produciría siempre el mejor clasificador. La selección de modelos se basó en evidencia de validación, no en la clasificación oficial.",
    "divergence_training_p1": "Para la tarea 1 comparé un XLM-RoBERTa multilingüe con clasificadores por idioma: DeBERTa v3 para inglés y RoBERTa BNE para español. La combinación especializada generó el run I2C-UHU_2. El artículo registra F1 combinado interno de 0,8617 para esta versión; debe distinguirse del F1 oficial de la clase positiva, 0,7733. Las diferencias de partición y configuración de evaluación impiden interpretar esas cifras como medidas intercambiables de exactitud en un despliegue.",
    "divergence_disagreement_heading": "7. Ensembles y aprendizaje con desacuerdo",
    "divergence_disagreement_p0": "Para clasificar intención desarrollé versiones que conservaban varias perspectivas de anotación. La versión v2.2 entrena seis instancias de XLM-RoBERTa con grupos diferenciados por género y edad: tres grupos femeninos y tres masculinos. Sus predicciones se combinan mediante un ensemble. La versión v2.3 compara ese enfoque con un ensemble compuesto únicamente por los tres grupos femeninos. El propósito es estudiar cómo cambia la predicción al representar distintas perspectivas, en lugar de considerar todo desacuerdo como un error de anotación.",
    "divergence_disagreement_p1": "La distribución de anotaciones proporciona una referencia soft: dos votos para una categoría entre seis anotaciones representan un apoyo de 2/6. La jerarquía también conecta las etapas: una probabilidad de intención queda condicionada por la de contenido sexista, mediante P(intención) = P(YES) × P(intención | YES). Las decisiones hard seleccionan categorías; las salidas soft representan apoyos graduales entre ellas. La versión de seis grupos generó el mejor run oficial de intención, I2C-UHU_2. La comparación permite analizar esos ensembles, sin establecer una conclusión causal universal sobre diversidad demográfica.",
    "divergence_evaluation_heading": "8. Evaluación oficial, errores y limitaciones",
    "divergence_evaluation_p0": "Evalué los sistemas en las modalidades oficiales Hard-Hard y Soft-Soft. ICM determina el orden de la clasificación; F1 y entropía cruzada ofrecen perspectivas complementarias. El run I2C-UHU_2 obtuvo el puesto 10.º en Hard-Hard y 13.º en Soft-Soft de la tarea 1; en la tarea 2, los puestos 11.º y 17.º. Son posiciones de runs en las clasificaciones ALL correspondientes, no puestos entre equipos únicos. La tabla conserva tarea, modalidad, identificador del run y métrica para que cada cifra pueda contrastarse con su fuente.",
    "divergence_evaluation_p1": "Revisé errores y matrices de confusión para identificar confusiones entre sexismo directo, relato y crítica. El sarcasmo, las expresiones idiomáticas, el contexto cultural y la ambigüedad siguieron planteando dificultades. El trabajo demuestra implementación de entrenamiento multilingüe, aumento de datos, optimización de hiperparámetros y evaluación de ensembles, con evidencia limitada al benchmark y los experimentos publicados. La incorporación de datos adicionales y otras estrategias de ensemble se planteó como investigación futura; no se presenta aquí como implementación realizada ni como un sistema de moderación en producción.",
    "multimodal_objective_heading": "1. Objetivo y tres tareas de evaluación",
    "multimodal_objective_p0": "Desarrollé los pipelines técnicos y experimentales de la participación I2C-UHU-Altair en EXIST 2025, extendiendo el trabajo textual a memes en español e inglés. La imagen y el texto pueden modificar mutuamente su significado: una escena visualmente neutra puede adquirir un sentido discriminatorio con su texto, mientras que una afirmación aparentemente sexista puede utilizarse para criticar la discriminación. El sistema debía modelar esa interacción, no limitarse a clasificar palabras o reconocer objetos. La investigación comparó extracción de representaciones multimodales con una ruta basada en descripciones y modelos de lenguaje.",
    "multimodal_objective_p1": "La subtarea 2.1 identifica contenido sexista. La 2.2 distingue intención DIRECT y JUDGEMENTAL; a diferencia de la tarea sobre tuits, excluye REPORTED. La 2.3 predice cinco categorías no excluyentes: desigualdad ideológica, estereotipos y dominancia, cosificación, violencia sexual y misoginia/violencia no sexual. Un meme puede pertenecer a varias categorías. Esta distinción es esencial al diseñar las salidas e interpretar probabilidades: la intención multiclase y la categorización multietiqueta no comparten la misma restricción de normalización.",
    "multimodal_data_heading": "2. Datos y particiones experimentales",
    "multimodal_data_p0": "El conjunto facilitado contiene 4.044 memes de entrenamiento y 1.053 de test en formato JSON, relacionando cada imagen con texto extraído, idioma, identificadores y varias anotaciones. Organicé las entradas para que las representaciones textuales y visuales correspondieran al mismo ejemplo durante el procesamiento. La partición experimental interna utilizó 3.235 instancias de entrenamiento y 809 de validación. Este subconjunto de validación es distinto del test oficial y constituye el contexto adecuado para seleccionar modelos y comparar hiperparámetros.",
    "multimodal_data_p1": "La partición publicada estratificó los ejemplos por su etiqueta dominante. En datos multietiqueta, ese criterio proporciona una estratificación práctica, pero no garantiza conservar todas las coocurrencias de categorías. También analicé distribuciones de anotaciones y la presencia de categorías superpuestas. El artículo documenta desacuerdo frecuente en la anotación binaria y asignación habitual de varios tipos de sexismo. Estas observaciones motivaron las salidas probabilísticas y experimentos complementarios con ejemplos seleccionados por consenso, manteniendo cautela sobre lo que representa una única etiqueta hard.",
    "multimodal_preprocessing_heading": "3. Preparación del texto y de las imágenes",
    "multimodal_preprocessing_p0": "Implementé la preparación textual publicada: minúsculas, eliminación de caracteres especiales irrelevantes, normalización de espacios y exclusión de instancias con texto vacío. El pipeline conservaba puntuación informativa cuando correspondía. Para las imágenes comprobé existencia y validez del archivo, convertí las entradas a RGB, homogeneicé su formato y preparé los valores visuales para el procesamiento de los modelos. Estas operaciones resuelven problemas de integridad previos a la extracción de embeddings o a la inferencia generativa; una imagen ausente no puede tratarse silenciosamente como un ejemplo multimodal completo.",
    "multimodal_preprocessing_p1": "Consideré el preprocesamiento parte de la arquitectura experimental. La ruta basada en representaciones requiere vectores consistentes, mientras que la ruta descriptiva debe conservar las pistas visuales y textuales que explican el significado social del meme. La limpieza reduce variaciones de formato, pero una eliminación agresiva puede descartar contexto útil. La descripción del artículo debe entenderse como la preparación implementada, no como evidencia de que cada transformación mejora todas las tareas. El análisis posterior de errores sigue siendo necesario para identificar información perdida o mal interpretada.",
    "multimodal_annotations_heading": "4. Desacuerdo, consenso y selección de ejemplos",
    "multimodal_annotations_p0": "Implementé estrategias de procesamiento de anotaciones diferentes para los dos pipelines. En el A se calculaban etiquetas de consenso para detección e intención, excluyendo respuestas inválidas o UNKNOWN. El artículo describe un umbral de frecuencia de al menos el 50 % para seleccionar categorías en su procedimiento de curación. Es una decisión interna de modelado, no una descripción de los umbrales oficiales utilizados para construir el gold de la competición. También comparé las anotaciones con la referencia agregada mediante accuracy y, para salidas multietiqueta, similitud de Jaccard.",
    "multimodal_annotations_p1": "Para el pipeline B seleccioné ejemplos con alto acuerdo como referencias few-shot: la función de curación identifica hasta diez candidatos representativos por clase, mientras que los prompts utilizan un conjunto menor de tres a cinco ejemplos. El acuerdo facilita que el modelo interprete esas referencias, pero no equivale a verdad objetiva. Ordenar anotadores frente al consenso puede infravalorar perspectivas minoritarias válidas. Por ello, la explicación técnica distingue modelado del desacuerdo, agregación por consenso y selección de ejemplos para prompts, sin presentarlos como una operación idéntica.",
    "multimodal_pipeline-a_heading": "5. Pipeline A: representaciones BLIP-2 y XGBoost",
    "multimodal_pipeline-a_p0": "Implementé la ruta de extracción de representaciones con BLIP-2, combinando información visual y textual. La arquitectura publicada describe el codificador visual y el Q-Former como puente para la información de imagen, seguidos de preparación de secuencias, normalización L2 y attention pooling para obtener representaciones de tamaño fijo. Los vectores agregados de imagen y texto se concatenan antes de la predicción supervisada. Esta separación entre extracción multimodal y estimador permite comparar configuraciones del clasificador sin redefinir la representación de entrada en cada paso.",
    "multimodal_pipeline-a_p1": "La configuración publicada de XGBoost utiliza regresión con error cuadrático, 300 árboles, profundidad máxima 10, learning rate de 0,05 y regularización L2 de 1, con ejecución en GPU. La búsqueda también explora subsample y colsample_bytree. El artículo contiene descripciones diferentes de la normalización de salida; esta memoria no las convierte en una afirmación de implementación sin respaldo. En particular, la tarea multietiqueta oficial admite probabilidades de categorías cuya suma supera uno. No debe presentarse una distribución de suma uno como requisito universal de la subtarea 2.3. El pipeline A corresponde al run I2C-UHU-Altair_1.",
    "multimodal_pipeline-b_heading": "6. Pipeline B: descripciones con Qwen y clasificación few-shot",
    "multimodal_pipeline-b_p0": "Implementé una segunda ruta con Qwen/Qwen2.5-VL-7B-Instruct para generar descripciones semánticas concisas de cada meme. El prompt se centra en la situación y sus implicaciones sociales o de género, en lugar de solicitar un inventario visual genérico. La descripción resultante se entrega a modelos de lenguaje ajustados para seguir instrucciones, utilizando ejemplos seleccionados para mostrar la tarea. El artículo trata modelos de la familia Mistral y otras variantes identificadas por nombre; la memoria no presupone que todas compartan la misma arquitectura base.",
    "multimodal_pipeline-b_p1": "El prompting few-shot introduce ejemplos en el contexto de inferencia; no constituye fine-tuning de los pesos para la tarea. Esa distinción separa esta ruta de los baselines textuales entrenados y del estimador supervisado XGBoost. El enfoque ofrece una descripción intermedia interpretable, pero sus errores pueden propagarse: un contexto visual omitido o una interpretación equivocada condiciona la decisión posterior. Esta ruta generó I2C-UHU-Altair_2, evaluado mediante predicciones hard. Su rendimiento no debe presentarse como calibración soft cuando no existe una entrega oficial soft correspondiente.",
    "multimodal_evaluation_heading": "7. Baselines y protocolo de evaluación",
    "multimodal_evaluation_p0": "Utilicé baselines exclusivamente textuales con BERT-base y XLM-RoBERTa-base como referencia para examinar los enfoques multimodales. Su configuración publicada incluye AdamW, learning rate de 3e-5, batch size de 32, longitud de 128, weight decay de 0,01 y cinco épocas, con early stopping según la validación. Esta configuración corresponde a esos baselines Transformer, no automáticamente a la inferencia de Qwen ni a XGBoost. Mantener explícitas esas funciones permite interpretar técnicamente la comparación.",
    "multimodal_evaluation_p1": "Hard-Hard compara categorías seleccionadas con una referencia agregada. Soft-Soft compara las predicciones con la distribución de anotaciones humanas. ICM es la métrica oficial de clasificación; su versión normalizada expresa una puntuación relativa, no una probabilidad ni un porcentaje de aciertos. F1 YES complementa los resultados binarios y macro-F1 resume el rendimiento por clases en intención y categorización. La tabla utiliza las particiones ALL de los leaderboards finales de la organización. Identifica cada run y modalidad, evitando mezclar validación interna, subconjuntos por idioma y test oficial.",
    "multimodal_results_heading": "8. Resultados oficiales, interpretación y limitaciones",
    "multimodal_results_p0": "El pipeline A obtuvo los puestos 5.º en detección, 2.º en intención y 3.º en categorización bajo evaluación Soft-Soft. El resultado de intención sigue el leaderboard oficial, que resuelve la mención inconsistente al 3.º puesto del resumen del artículo. Las mejores posiciones Hard-Hard fueron 9.º en detección con el pipeline B, 7.º en intención con el A y 6.º en categorización con el A. Sus valores F1 fueron, respectivamente, 0,7125 para YES, 0,2685 de macro-F1 y 0,4223 de macro-F1. Los puestos corresponden a runs presentados en cada modalidad.",
    "multimodal_results_p1": "Los resultados permiten comparar dos formas diferentes de utilizar información visual, sin afirmar que una domine en todas las modalidades. El análisis de errores identifica ironía, discriminación implícita, categorías minoritarias y fidelidad de las descripciones como limitaciones. El trabajo demuestra preparación de entradas multimodales, fusión de representaciones, estimación supervisada, diseño de prompts y evaluación con benchmark. Vídeo, audio, moderación en tiempo real y otras familias de modelos son líneas futuras del artículo; no se presentan como capacidades implementadas de estos sistemas de clasificación de memes.",
    "awardsHeading": "Premios y reconocimientos",
    "awardsProfileLink": "Premios académicos: 4.º en TFG de IA de Andalucía · 2.º premio de Innovación Social",
    "awardsIntro": "Reconocimientos a mi TFG sobre detección de sexismo, intención de origen y aprendizaje con desacuerdo.",
    "awardsResearchLink": "Ver los premios del TFG y los documentos acreditativos",
    "aiAwardPlace": "4.º puesto · Finalista",
    "aiAwardTitle": "Premios de TFG en IA de las universidades andaluzas",
    "aiAwardContext": "Sopra Steria · II Congreso de Inteligencia Artificial de Andalucía · Granada, noviembre de 2024",
    "aiAwardEvidence": "Diploma de finalista expedido a Manuel Guerrero García. El diploma acredita la condición de finalista; el puesto ha sido confirmado por el autor.",
    "waterAwardPlace": "2.º premio de TFG",
    "waterAwardTitle": "Innovación Social · Cátedra Aguas de Huelva",
    "waterAwardContext": "Convocatoria 2024 · Entrega en febrero de 2025 · Universidad de Huelva",
    "waterAwardEvidence": "Certificado del segundo premio de TFG en la línea de Innovación Social, firmado electrónicamente el 27 de febrero de 2025.",
    "awardThesisLabel": "Trabajo reconocido",
    "awardThesisTitle": "Detección y Categorización, según su Intención, de Mensajes de Contenido Sexista Mediante Técnicas de Deep Learning y Aprendizaje con Desacuerdo.",
    "expandDiploma": "Ampliar diploma",
    "expandCertificate": "Ampliar certificado",
    "awardSource": "Fuente pública",
    "originalDiploma": "Diploma original",
    "originalCertificate": "Certificado original (PDF)",
    "viewerHeading": "Documento acreditativo",
    "closeDocument": "Cerrar",
    "openDocumentOriginal": "Abrir documento original",
    "reportStageIndex": "Etapas de la memoria",
    "reportRoleLabel": "Mi responsabilidad",
    "reportRole": "Desarrollo técnico e implementación experimental",
    "reportSourceLabel": "Documentación",
    "reportSourceText": "Artículo publicado y clasificaciones oficiales ALL",
    "reportPaper": "Leer artículo (PDF)",
    "reportDownload": "Descargar artículo",
    "reportCitation": "Referencia de la publicación",
    "reportMetricNote": "Las posiciones corresponden a runs, no a equipos únicos. ICM determina el orden; F1 y entropía cruzada son métricas complementarias. ALL incluye ambos idiomas.",
    "configHeading": "Configuración experimental",
    "officialResultsHeading": "Resultados oficiales de test · Instancias ALL",
    "parameter": "Parámetro",
    "initialBaseline": "Baseline inicial",
    "searchSpace": "Espacio de búsqueda",
    "component": "Componente",
    "configuration": "Configuración publicada",
    "task": "Tarea",
    "evaluationMode": "Evaluación",
    "run": "Run",
    "rank": "Puesto",
    "normalizedICM": "ICM normalizado",
    "additionalMetric": "Métrica complementaria",
    "resultsSource": "Fuente",
    "detectionTask": "Detección",
    "intentTask": "Intención",
    "categorizationTask": "Categorización",
    "officialLeaderboard": "Clasificación",
    "crossEntropy": "Entropía cruzada",
    "flow2024Title": "Arquitectura de 2024: detección y modelado de intención",
    "flow2024Detection": "Tarea 1 · Identificación de sexismo",
    "flow2024Input": "Tuits normalizados · Inglés / español",
    "flow2024Models": "DeBERTa v3 / RoBERTa BNE",
    "flow2024Output": "YES / NO · P(YES)",
    "flow2024Intent": "Tarea 2 · Intención de origen",
    "flow2024Annotations": "Seis perspectivas de anotación",
    "flow2024Ensemble": "Seis modelos XLM-RoBERTa → ensemble",
    "flow2024IntentOutput": "Salidas de intención condicionadas por P(YES)",
    "flow2025Title": "Arquitecturas de 2025: fusión de representaciones y descripción semántica",
    "flow2025A": "Pipeline A · I2C-UHU-Altair_1",
    "flow2025B": "Pipeline B · I2C-UHU-Altair_2",
    "flow2025Input": "Imagen del meme + texto",
    "flow2025Features": "BLIP-2 → pooling y fusión",
    "flow2025AOutput": "XGBoost → predicciones hard / soft",
    "flow2025Description": "Qwen2.5-VL → descripción semántica",
    "flow2025BOutput": "LLM con few-shot → predicciones hard",
    "flow2025Note": "Ambas rutas abordan detección, intención y categorización. Sus entregas oficiales difieren en la modalidad de evaluación.",
    "readMoreResearch": "Memoria técnica: ocho etapas, configuraciones y resultados oficiales",
    "results2025Note": "En la subtarea 2.2 Soft-Soft, el resultado oficial es el 2.º puesto. Esta cifra corrige la mención inconsistente al 3.º puesto del resumen del artículo.",
    "config2025Note": "La configuración de entrenamiento Transformer corresponde a los baselines textuales. La clasificación few-shot proporciona ejemplos durante la inferencia y no implica fine-tuning específico para la tarea.",
    "divergence_objective_source": "Artículo, §§1, 3.1–3.2",
    "divergence_data_source": "Artículo, §§3.3, 4.2",
    "divergence_baselines_source": "Artículo, §4.1, tablas 3–5",
    "divergence_preprocessing_source": "Artículo, §§4.3, 4.6",
    "divergence_optimization_source": "Artículo, §4.4, tablas 7–11",
    "divergence_training_source": "Artículo, §4.5, tablas 12–15",
    "divergence_disagreement_source": "Artículo, §4.5.2, tablas 16–17",
    "divergence_evaluation_source": "Artículo, §§4.6–6, tablas 20–23",
    "multimodal_objective_source": "Artículo, §§1, 3.1–3.3",
    "multimodal_data_source": "Artículo, §§3.4–3.5, 3.7",
    "multimodal_preprocessing_source": "Artículo, §3.6",
    "multimodal_annotations_source": "Artículo, §4.3, tabla 1",
    "multimodal_pipeline-a_source": "Artículo, §§4.1.1, 4.4.2",
    "multimodal_pipeline-b_source": "Artículo, §4.2",
    "multimodal_evaluation_source": "Artículo, §4.4; protocolo oficial de evaluación",
    "config2025Baseline": "AdamW · LR 3e-5 · batch 32 · máx. tokens 128 · weight decay 0,01 · 5 épocas",
    "config2025Prompt": "Descripción semántica → LLM con few-shot · 3–5 ejemplos",
    "multimodal_results_source": "Artículo, §§5–6; clasificaciones oficiales ALL",
    "aiDiplomaAlt": "Diploma de finalista expedido a Manuel Guerrero García por Sopra Steria, 2024",
    "waterCertificateAlt": "Certificado de la Universidad de Huelva del segundo premio de TFG en Innovación Social, convocatoria 2024",
    "maxTokens": "Máximo de tokens",
    "epochsPatience": "Épocas / paciencia",
    "optimizerLabel": "Optimizador",
    "xgboostSearch": "Búsqueda en XGBoost"
  }
};
const originalCopy = new Map();
const elements = [...document.querySelectorAll('[data-i18n]')];
for(const element of elements) originalCopy.set(element,element.textContent);
const storage = {get(key){try{return localStorage.getItem(key)}catch{return null}},set(key,value){try{localStorage.setItem(key,value)}catch{}}};
function setLanguage(lang){
  const active = lang === 'es' ? 'es':'en';
  for(const el of elements){const key=el.dataset.i18n;el.textContent=active==='es'?(translations.es[key]||originalCopy.get(el)):originalCopy.get(el)}
  document.documentElement.lang=active;
  document.querySelector('#language-label').textContent=active==='es'?'EN':'ES';
  document.querySelector('#language-toggle').setAttribute('aria-label',active==='es'?'Switch to English':'Cambiar a español');
  document.title=active==='es'?'Manuel Guerrero García — Ingeniero de datos':'Manuel Guerrero García — Data Engineer';
  storage.set('portfolio-lang',active);
  document.querySelectorAll('[data-i18n-alt]').forEach(image=>{
    image.alt=active==='es'?translations.es[image.dataset.i18nAlt]:image.dataset.altEn;
  });
  updateDocumentLabels();
  requestAnimationFrame(paintScroll);
}
function setTheme(theme){const t=theme==='dark'?'dark':'light';document.documentElement.dataset.theme=t;document.querySelector('#theme-toggle').setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode');document.querySelector('#theme-toggle').setAttribute('aria-pressed',String(t==='dark'));document.querySelector('meta[name="theme-color"]').content=t==='dark'?'#151E2C':'#F7F5F1';storage.set('portfolio-theme',t)}
const langToggle=document.querySelector('#language-toggle');langToggle.addEventListener('click',()=>setLanguage(document.documentElement.lang==='en'?'es':'en'));
document.querySelector('#theme-toggle').addEventListener('click',()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));
const menuToggle=document.querySelector('#menu-toggle');const mobileNav=document.querySelector('#mobile-nav');
menuToggle.addEventListener('click',()=>{const isOpen=!mobileNav.hidden;mobileNav.hidden=isOpen;menuToggle.setAttribute('aria-expanded',String(!isOpen));menuToggle.setAttribute('aria-label',isOpen?'Open menu':'Close menu')});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.hidden=true;menuToggle.setAttribute('aria-expanded','false')}));
const progress=document.querySelector('#reading-progress');let scrollQueued=false;
function paintScroll(){
  const total=document.documentElement.scrollHeight-innerHeight;
  progress.style.width=`${total>0?Math.min(100,Math.max(0,scrollY/total*100)):0}%`;
  const activeSection=sections.filter(section=>section.getBoundingClientRect().top<=Math.max(120,innerHeight*.35)).at(-1);
  sectionLinks.forEach(link=>{
    const active=Boolean(activeSection&&link.hash==='#'+activeSection.id);
    link.classList.toggle('active',active);
    if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
  });
  scrollQueued=false;
}
window.addEventListener('scroll',()=>{if(!scrollQueued){scrollQueued=true;requestAnimationFrame(paintScroll)}},{passive:true});window.addEventListener('resize',paintScroll);
const sections=[...document.querySelectorAll('main > section[id]')];const sectionLinks=[...document.querySelectorAll('.desktop-nav a')];

const documentViewer=document.querySelector('#document-viewer');
const documentImage=document.querySelector('#document-viewer-image');
const documentDescription=document.querySelector('#document-viewer-description');
let documentTrigger=null;
function updateDocumentLabels(){
  if(!documentTrigger)return;
  const key=documentTrigger.dataset.documentTitle;
  const englishTitle=documentTrigger.closest('.award-card').querySelector('[data-i18n="'+key+'"]');
  const title=document.documentElement.lang==='es'?translations.es[key]:originalCopy.get(englishTitle);
  documentDescription.textContent=title;
  documentImage.alt=title;
}
document.querySelectorAll('.award-preview').forEach(trigger=>trigger.addEventListener('click',event=>{
  if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey||typeof documentViewer.showModal!=='function')return;
  event.preventDefault();
  documentTrigger=trigger;
  documentImage.src=trigger.dataset.document;
  document.querySelector('#document-viewer-original').href=trigger.dataset.original;
  updateDocumentLabels();
  documentViewer.showModal();
  documentViewer.scrollTop=0;
  document.body.classList.add('document-viewer-open');
}));
document.querySelector('#document-viewer-close').addEventListener('click',()=>documentViewer.close());
documentViewer.addEventListener('click',event=>{
  if(event.target!==documentViewer)return;
  const bounds=documentViewer.getBoundingClientRect();
  if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)documentViewer.close();
});
documentViewer.addEventListener('close',()=>{
  if(documentViewer.open)return;
  document.body.classList.remove('document-viewer-open');
  documentImage.removeAttribute('src');
  documentTrigger?.focus({preventScroll:true});
});
function revealResearchHash(){
  let id;
  try{id=decodeURIComponent(location.hash.slice(1))}catch{return}
  const target=document.getElementById(id);
  if(!target)return;
  const details=target.closest('.research-details');
  if(details&&!details.open){
    details.open=true;
    requestAnimationFrame(()=>target.scrollIntoView({behavior:'instant',block:'start'}));
  }
}
window.addEventListener('hashchange',revealResearchHash);
document.querySelectorAll('.research-details').forEach(details=>details.addEventListener('toggle',paintScroll));
document.querySelector('#current-year').textContent=new Date().getFullYear();
setTheme(storage.get('portfolio-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
setLanguage(storage.get('portfolio-lang')||'en');revealResearchHash();paintScroll();
