_Digital F(r)ictions_ was conceived as a response to the homogenizing tendencies of contemporary AI, particularly its Western-centric visual biases. The project seeks to reclaim and recontextualize Colombian artistic heritage by aligning it with the country’s diverse ecological geographies and reimagining it through culturally specific generative models. By combining cartographic computation with image generation, the project aims to create a plural, frictional space—where multiple ways of seeing, knowing, and representing Colombia can coexist

## Methodology

**Digital F(r)ictions** is built on a dual methodology that intertwines geographic computation and generative image modeling to reimagine the relationship between Colombian art and territory. This hybrid process operates on two levels—cartographic and visual—both grounded in AI-assisted reinterpretation of the MAMBO (Museo de Arte Moderno de Bogotá) collection.

### 1. Mapping Art into Territory

At the heart of the cartographic component lies a computational procedure that semantically links each artwork from the MAMBO collection to a specific ecological region of Colombia. Instead of assigning locations based on historical provenance or curatorial logic, artworks are geographically redistributed based on **semantic resonance** with environmental and territorial layers.

We begin by compiling a set of geospatial raster layers that describe Colombia’s diverse ecological conditions—ranging from elevation, humidity, and temperature to distances from features like coastlines, urban centers, and farmland. These layers are standardized to a 5 km resolution and normalized to allow comparability.

Each artwork undergoes **caption extraction** using the BLIP model (Bootstrapped Language Image Pretraining), producing concise prompts (e.g., “an artwork of a city with a full moon”). These text prompts serve as semantic anchors. Both the captions and the textual descriptions of geographical layers (e.g., “tropical forest,” “valley,” “urban area”) are encoded into the same vector space using CLIP (Contrastive Language-Image Pretraining).

Then, using cosine similarity, we measure the alignment between each artwork's semantic vector and each ecological layer. For every pixel of the Colombian map, the artwork with the highest aggregated similarity to the overlapping ecological features is assigned to that location. The result is a **fictional cartography** where Colombia is rediscovered through the lens of its own modern art collection—each pixel reflecting a visual narrative that resonates with its environment.

This cartographic process serves both as a navigational tool and as a conceptual inversion of traditional maps: users explore Colombia by discovering its artworks, and conversely, they explore the MAMBO collection through the country’s diverse landscapes.

### 2. Generating Multiple Ways of Seeing

To complicate the singular gaze of contemporary AI models, the project introduces a **multi-perspective reinterpretation** of each artwork. Four distinct generative models were trained to reflect four different Colombian aesthetic traditions:

-   Modern art (centered on MAMBO)
-   Pre-Hispanic visual culture
-   Colonial art
-   Contemporary street art from Bogotá

These models are based on the open-source **Stable Diffusion 2.0** architecture, which was fine-tuned using **Low-Rank Adaptation (LoRA)**. For each aesthetic tradition, a small dataset of artwork-image/caption pairs was used to fine-tune the generative model on its respective visual language. BLIP-generated captions were again employed to provide neutral prompts devoid of aesthetic bias.

Each artwork in the MAMBO collection is thus reimagined four times: one version for each trained model. For example, the same prompt—“an artwork of two women in black and white”—is interpreted differently through the lens of colonial art, modern art, Pre-Hispanic artifacts, and urban street expressions. This translation does not merely reproduce style; it actively **reconstructs the gaze**, foregrounding cultural and historical specificity in contrast to the homogenizing outputs of generalized AI.

### 3. Interaction: An Interface for Plurality

The interface places users at the center of this dynamic friction. The screen is split:

-   On the left, a navigable map of Colombia visualizes the semantic placements of artworks.
-   On the right, a gallery displays the generative reinterpretations of the currently viewed painting, one from each LoRA-trained model.

Users can toggle between map layers (e.g., humidity, urban proximity) and aesthetic lenses to explore how geography and culture intertwine. The caption used to generate the image is always displayed, grounding the variations in a shared semantic point of origin.

By navigating through space and switching between generative styles, users are invited to question what it means to “see” Colombia through data. The visual output becomes not a reproduction, but a **refracted image**—a fiction rooted in friction, embracing multiplicity rather than reducing it.
