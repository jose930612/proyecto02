# Proyecto 02 Tópicos especiales en telemática

kubectl apply -f

kubectl apply -f projectdb-claim0-persistentvolumeclaim.yaml -f nodepj-claim0-persistentvolumeclaim.yaml -f nodepj-claim1-persistentvolumeclaim.yaml
kubectl apply -f projectdb-kuber-project02.yaml -f nodepj-kuber-project02.yaml

kubectl get deployments --all-namespaces
kubectl delete -n default deployment --all

kubectl get pods
kubectl describe pods <POD_NAME>
kubectl delete pods --all

kubectl get pvc
kubectl delete pvc --all

kubectl get statefulsets
kubectl delete statefulset --all