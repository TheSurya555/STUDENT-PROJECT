  document.addEventListener('DOMContentLoaded', function() {
    function showSection(sectionId, linkId) {
      const sections = document.querySelectorAll('.content-section');
      const links = document.querySelectorAll('.sidebar a');
      
      sections.forEach(section => section.classList.remove('active'));
      links.forEach(link => link.classList.remove('active'));
      
      document.getElementById(sectionId).classList.add('active');
      document.getElementById(linkId).classList.add('active');
    }

    document.getElementById('myInfoLink').addEventListener('click', function(event) {
      event.preventDefault();
      showSection('myInfoSection', 'myInfoLink');
    });

    document.getElementById('projectsLink').addEventListener('click', function(event) {
      event.preventDefault();
      showSection('projectsSection', 'projectsLink');
    });

    document.getElementById('billingLink').addEventListener('click', function(event) {
      event.preventDefault();
      showSection('billingSection', 'billingLink');
    });

    document.getElementById('testLink').addEventListener('click', function(event) {
      event.preventDefault();
      showSection('testSection', 'testLink');
    });

    document.getElementById('connectLink').addEventListener('click', function(event) {
      event.preventDefault();
      showSection('connectSection', 'connectLink');
    });
  });  

  document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
  });

  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      // You can add further processing here, like uploading the file
    }
  });  