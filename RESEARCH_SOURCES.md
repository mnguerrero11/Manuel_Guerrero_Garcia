# Research and award evidence

Prepared on 2026-11-11 from documents supplied by Manuel Guerrero García and the organizers' official leaderboards. The website is a static local revision; no hosting deployment is performed.

## Original documents

| Local artifact | Supplied original | Purpose |
| --- | --- | --- |
| `assets/papers/exist-2024-guerrero-garcia.pdf` | `EXIST-2024_paper96.pdf`, 17 pages | Full methodology, experiments and publication reference for EXIST 2024 |
| `assets/papers/exist-2025-guerrero-garcia.pdf` | `paper_153.pdf`, 16 pages | Full methodology, experiments and publication reference for EXIST 2025 |
| `assets/awards/aguas-de-huelva-certificate.pdf` | `Guerrero Garcia.report.pdf`, 1 page | Second undergraduate thesis prize, Social Innovation, 2024 call; electronic signature dated 2025-02-27 |
| `assets/awards/andalusia-ai-finalist.jpg` | `diploma.jpg`, supplied after the original chat attachment | Sopra Steria finalist diploma for the Andalusian university AI thesis awards, November 2024 congress |
| `assets/awards/aguas-de-huelva-certificate.jpg` | Rendering of the original certificate PDF | Full-size viewer preview, rendered at a maximum dimension of 1,800 px |
| `assets/awards/aguas-de-huelva-thumbnail.png` | Rendering of the original certificate PDF | Thumbnail, rendered at a maximum dimension of 650 px |

Original PDFs and the JPG are copied without alteration. The certificate previews are raster renderings using `pdftoppm`; the original digitally signed PDF remains available separately. No generative image tool was used for document artwork.

The papers identify the publication authors and state CC BY 4.0. Their author lists are preserved in the website references. Technical development and experimental implementation are described in the first person following the portfolio owner's explicit statement that he performed that work. This statement does not change the bibliographic author lists or the attribution inside the original publications.

## Awards

- **Andalusian AI recognition:** the owner explicitly confirms fourth place. The original diploma certifies **finalist** status without a numerical place. The card retains both facts. The [Junta de Andalucía event page](https://www.juntadeandalucia.es/datosabiertos/portal/actualidad/detalle/1957) supplies congress context and the SOPRA TFG-TFM award session, not a numerical ranking for this recipient. Congress dates: 19–21 November 2024; the displayed award context uses November 2024 rather than the diploma's December electronic-signature date.
- **Aguas de Huelva recognition:** the supplied university certificate establishes second prize for an undergraduate thesis in the **Social Innovation** category, **2024 call**. The [Huelva Información report](https://www.huelvainformacion.es/huelva/catedra-innovacion-social-aguas-huelva_0_2003369356.html), dated 19 February 2025, independently identifies the recipient, thesis, category and award ceremony. The card distinguishes call year from ceremony year.
- Both recognitions concern the undergraduate thesis titled “Detección y Categorización, según su Intención, de Mensajes de Contenido Sexista Mediante Técnicas de Deep Learning y Aprendizaje con Desacuerdo”. They are not presented as awards won by the 2025 multimodal system.

## Report-to-paper mapping

| Report | Stage | Evidence |
| --- | --- | --- |
| 2024 | Objective and labels | §§1, 3.1–3.2 |
| 2024 | Dataset and annotation groups | §3.3; §4.2 |
| 2024 | Four-class and two-stage baselines | §4.1; Tables 3–5 |
| 2024 | Normalization and its limitations | §4.3; error analysis in §4.6 |
| 2024 | Backtranslation and Optuna | §4.4; Tables 7–11 |
| 2024 | Trainer, checkpoints, early stopping, language specialization | §4.5; Tables 12–15 |
| 2024 | Six-group and three-group ensembles, hierarchy | §4.5.2; Tables 16–17 |
| 2024 | Official results, errors, future work | §§4.6–6; Tables 20–23; official leaderboards below |
| 2025 | Three meme tasks and labels | §§1, 3.1–3.3 |
| 2025 | 4,044 training / 1,053 test; internal 3,235 / 809 split | §§3.4–3.5, 3.7 |
| 2025 | Text/image preparation | §3.6 |
| 2025 | Consensus, accuracy/Jaccard, few-shot examples | §4.3; Table 1 |
| 2025 | BLIP-2 representations, pooling and XGBoost | §4.1.1; §4.4.2 |
| 2025 | Qwen descriptions and few-shot LLM classification | §4.2 |
| 2025 | Text-only baselines and evaluation | §4.4; [official evaluation protocol](https://nlp.uned.es/exist2025/#evaluation) |
| 2025 | Results and limitations | §§5–6; official leaderboards below |

Each stage links to its local paper and identifies the corresponding sections. Configuration tables describe published experimental settings; they do not claim that the research was rerun while building the portfolio. The architecture figures are explanatory HTML/CSS diagrams of those stages.

## Official test results

Sources are the `ALL` tabs linked by the [EXIST 2024 organizers](https://nlp.uned.es/exist2024/#results) and [EXIST 2025 organizers](https://nlp.uned.es/exist2025/#results). These aggregate Spanish and English. Rankings are **submitted-run rankings**, not rankings among unique teams. The gold-reference row is not a submitted competitor. ICM determines the ranking; normalized ICM is not an accuracy percentage.

### EXIST 2024

All four displayed entries are `I2C-UHU_2.json`.

| Task | Evaluation | Rank | Normalized ICM | Complementary metric | Official workbook |
| --- | --- | ---: | ---: | --- | --- |
| 1 · Detection | Hard-Hard | 10 | 0.7793 | F1 YES 0.7733 | [Task 1](https://docs.google.com/spreadsheets/d/1P63RjIEnnrRFqQiXsHLAhS7nKA0dhrny/edit) |
| 1 · Detection | Soft-Soft | 13 | 0.6102 | Cross entropy 0.9184 | [Task 1](https://docs.google.com/spreadsheets/d/1P63RjIEnnrRFqQiXsHLAhS7nKA0dhrny/edit) |
| 2 · Intent | Hard-Hard | 11 | 0.5590 | Macro-F1 0.4980 | [Task 2](https://docs.google.com/spreadsheets/d/1k8gLz4bMLri4AbLJ0JjULTaU-diCp3SV/edit) |
| 2 · Intent | Soft-Soft | 17 | 0.2828 | Cross entropy 2.1440 | [Task 2](https://docs.google.com/spreadsheets/d/1k8gLz4bMLri4AbLJ0JjULTaU-diCp3SV/edit) |

The short run identifiers displayed in the portfolio omit the 2024 `.json` extension. Dataset and model-development scores such as 0.7807, 0.7876 and 0.8617 are identified as internal experiments, not placed in the official test table. Baseline A's four-class score and Baseline B's binary/three-class scores are not treated as measurements of the same prediction problem.

### EXIST 2025

The table selects the best-ranking Altair run for each task/evaluation combination.

| Task | Evaluation | Run | Rank | Normalized ICM | Complementary metric | Official workbook |
| --- | --- | --- | ---: | ---: | --- | --- |
| 2.1 · Detection | Soft-Soft | I2C-UHU-Altair_1 | 5 | 0.3624 | Cross entropy 0.9469 | [2.1](https://docs.google.com/spreadsheets/d/1aLfRpZMTdCMzLhG0XjSb0rkM1w7mjEnk/edit) |
| 2.1 · Detection | Hard-Hard | I2C-UHU-Altair_2 | 9 | 0.4932 | F1 YES 0.7125 | [2.1](https://docs.google.com/spreadsheets/d/1aLfRpZMTdCMzLhG0XjSb0rkM1w7mjEnk/edit) |
| 2.2 · Intent | Soft-Soft | I2C-UHU-Altair_1 | 2 | 0.2795 | Cross entropy 1.5556 | [2.2](https://docs.google.com/spreadsheets/d/1twJwoo0SESEixTzDIKHeBqkTzpqyNTMd/edit) |
| 2.2 · Intent | Hard-Hard | I2C-UHU-Altair_1 | 7 | 0.2734 | Macro-F1 0.2685 | [2.2](https://docs.google.com/spreadsheets/d/1twJwoo0SESEixTzDIKHeBqkTzpqyNTMd/edit) |
| 2.3 · Categorization | Soft-Soft | I2C-UHU-Altair_1 | 3 | 0.1915 | — | [2.3](https://docs.google.com/spreadsheets/d/12gKsggWypZDL-GeyfBNigSCKtS7eRQGK/edit) |
| 2.3 · Categorization | Hard-Hard | I2C-UHU-Altair_1 | 6 | 0.2934 | Macro-F1 0.4223 | [2.3](https://docs.google.com/spreadsheets/d/12gKsggWypZDL-GeyfBNigSCKtS7eRQGK/edit) |

## Technical discrepancies and interpretation

1. The 2025 abstract and part of its results summary say third place for Subtask 2.2 Soft-Soft. The official ALL leaderboard says **second**, matching another passage in the paper. The website uses the official result and notes the discrepancy.
2. The 2025 paper describes both sum normalization and softmax-like output operations. It also describes a sum-to-one target for multilabel categorization. The official protocol allows independent category probabilities with a sum greater than one for Subtask 2.3. The portfolio explains the task distinction and does not invent an exact undocumented correction to the original code.
3. Few-shot prompting is described as inference with examples, not as evidence of task-specific weight training. Pretrained instruction tuning is distinct from fine-tuning performed in this project.
4. The 2025 paper names several LLM variants under a shared family description. The website does not assert that every named variant has the same base model.
5. Agreement with consensus is not independent ground truth. Annotator ranking is described as comparison to the aggregated reference, without equating disagreement with an objectively incorrect annotation.
6. Official reference-label thresholds are distinguished from the project's internal curation thresholds. Counts of annotation assignments are not presented as counts of unique annotators.
7. The paper's broad claims about generalization, calibration and architectural superiority are not expanded into unsupported universal claims. Video, audio, real-time moderation and proposed model extensions remain future work.
