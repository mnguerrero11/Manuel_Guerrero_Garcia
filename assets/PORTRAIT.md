# Presentation portrait

- Asset: `manuel-guerrero-portrait.png` (1173 × 1341, PNG with alpha).
- Input: the formal portrait attached by Manuel Guerrero García in the conversation.
- Method: built-in `image_gen` / imagegen skill, background-extraction edit with `transparent_background: true`.
- Selected output: second extraction, copied into the workspace without further raster processing. The first generated version was discarded because it changed facial details more noticeably.
- Display: introductory identity block next to the name and role; responsive CSS preserves the image's proportions. The English/Spanish alternative text is localized with the existing image-alt translation mechanism.

## Final prompt

BACKGROUND REMOVAL ONLY. Target the ORIGINAL PHOTO uploaded by the user: young man in navy suit against a white background, original 798 x 912 pixel portrait with a soft low-resolution photographic appearance. Ignore the last AI-generated cutout, which wrongly sharpened and changed his face. Preserve the original image itself, not a recreated likeness. Copy every foreground pixel of the original photograph unchanged, including face, eyes, nose, teeth, expression, ears, hair shape, hair softness, skin, shirt pinstripes, tie pattern and suit, at the original resolution and original crop. Change only white backdrop pixels outside the person's silhouette to transparent alpha. This is a precise cutout/matting operation, not photo generation, face restoration, enhancement, sharpening or upscaling. The person and clothes must be visually identical to the original user upload. Preserve the original white shirt and blue suit. Do not add details or change facial texture. Return a PNG with genuine alpha transparency and natural soft matte edges.
