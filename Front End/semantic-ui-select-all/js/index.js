$('.dropdown').dropdown({
  label: {
    duration: 0,
  },
  debug: true,
  performance: true,
});

$('.ui.checkbox')
  .checkbox({
    onChecked() {
      const options = $('#members_dropdown > option').toArray().map(
        (obj) => obj.value
      );
      $('#members_dropdown').dropdown('set exactly', options);
    },
    onUnchecked() {
      $('#members_dropdown').dropdown('clear');
    },
  });