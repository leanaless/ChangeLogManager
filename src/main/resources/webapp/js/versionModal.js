'use strict';

app.directive('versionModal', function () {
  return {
    restrict: 'E',
    templateUrl: 'templates/asignar_usuarios.html',
    controllerAs: 'usuariosCtrl',
    bindToController: true,
    scope: {
      callback: "&",
      project: "="
    },
    controller: function (usuariosService) {
      var self = this;
      this.asignatario = null;
      this.asignar = this.callback();
      this.asignatariosPosibles = [];

      usuariosService.findAll(function (response) {
        self.asignatariosPosibles = response.data;
      }, function () {
        self.errors.push(mensaje);
      });
    }

  };
});