# Philter Application

## Introduction

Welcome to **Philter**, a web application that empowers users to enhance their images with a range of captivating filters and styles. Our app comprises three primary features: **Philter**, **Style Adopter**, and **Image Restoration**. In this README, we will provide an overview of each feature along with their operational mechanics.

## Philter Feature

The **Philter** feature seamlessly transforms your images into mesmerizing paintings. Here's a technical breakdown of its operation:

1. Utilizing the React library, users select an image and trigger the "Generate" button.
2. Axios facilitates the upload of the chosen image to our backend server.
3. Our backend employs a machine learning model to create a fresh filtered image.
4. The generated image is sent back to the frontend for immediate user display.
5. Should the user wish to retain the image, they can save it by clicking the "Save" button. Axios is once again employed to transmit the image to our backend, where it is securely stored.

## Style Adopter Feature

The **Style Adopter** feature offers a personalized touch to your images by allowing you to apply styles of your preference. Here's how it operates:

1. Users select an image and customize the style level using a dedicated Slider component.
2. Upon clicking the "Generate" button, Axios uploads both the chosen image and style level to our backend.
3. Our backend uses a machine learning model to generate a uniquely styled image based on the uploaded data.
4. The newly styled image is returned to the frontend for immediate user viewing.
5. Users can save the generated image by clicking the "Save" button, which triggers Axios to transmit the image to our backend for secure storage.

## Image Restoration Feature

The **Image Restoration** feature breathes life back into black and white images by restoring colors. Here's a glimpse of its operation:

1. Users select a black and white image and initiate the "Generate" command.
2. Axios uploads the chosen image to our backend.
3. A machine learning model on our backend restores the colors of the image.
4. The restored, color-enriched image is sent to the frontend for immediate user enjoyment.
5. To save the restored image, users can click the "Save" button. Axios facilitates the transmission of the image to our backend, where it is securely stored.

## Gallery Feature

The **Gallery** feature serves as a personalized collection of your transformed images. Here's an outline of its operation:

1. React is utilized to create an intuitive user interface that presents saved images in an attractive grid layout.
2. A NavigationBar component empowers users to navigate through paginated images.
3. Upon navigation to a new page, Axios fetches the corresponding images from our backend.
4. The retrieved images are displayed in the grid layout, granting users an immersive view of their saved creations.

## Join the Philter Community

Embrace the boundless potential of Philter's innovative image transformation capabilities. Embark on a voyage where technology converges with artistic expression, allowing you to encapsulate the essence of every moment through a unique lens. Unleash your creativity and become an integral part of the Philter community today!

For comprehensive access to the source code and further information, explore our [GitHub repository](https://github.com/philter133).

> **Note:** This documentation furnishes a high-level overview of Philter's features and setup. For an in-depth dive into technical details and code examples, refer to the repository and accompanying documentation.

---

# Installation Guide

## Welcome to Philter

Welcome to Philter, where your images undergo a captivating transformation, turning ordinary snapshots into breathtaking works of art. Harness the power of AI-driven filters, adapt styles to your liking, and restore lost colors with ease. Our platform merges cutting-edge technology with elegant design to deliver an unparalleled image editing experience. Join us on this creative journey and unleash your visual imagination.

## Installation Steps

Follow these steps to set up Philter and explore its potential:

1. Install MkDocs by running the following command in your terminal:

    ```bash
    pip install mkdocs
    ```

2. Create a new project and navigate to the repository:

    ```bash
    mkdocs new my-project
    cd my-project
    ```

3. Launch the local development server:

    ```bash
    mkdocs serve
    ```

    Access the documentation by navigating to [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your browser.

4. Ensure you have Node.js and npm installed on your system.

5. After downloading the repository, run the following commands to install required modules:

    ```bash
    npm install
    npm install next
    npm install react-google-login
    ```

## Running the Front-End Application

Embark on a visual journey through Philter's front-end application:

1. Launch the application with the following command:

    ```bash
    npm run dev
    ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to experience Philter's immersive interface.

