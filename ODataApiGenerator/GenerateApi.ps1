docker run -it --rm -v ${PWD}:/local diegomvh/odataapigen `
Name=Notes `
Metadata='http://host.docker.internal:8000/v1/$metadata' `
Output=/local

